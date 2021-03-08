/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/
require('dotenv').config()
const express = require("express");
var upload = require('./upload');


// import models so we can interact with the database
const User = require("./models/user");

// import authentication library
const auth = require("./auth");
const queue = require("./queue");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();
const { check, validationResult } = require("express-validator/check");


//initialize socket
const socket = require("./server-socket");

router.post(
  "/signup",
  [
    check("name", "Please Enter a valid name").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a longer password").isLength({
      min: 6,
    }),
  ],
  auth.signUp
);

router.post("/login", [check("email", "Please enter a valid email").isEmail()], auth.login);

router.get("/me", auth.me, async (req, res) => {
  try {
    // request.user is getting fetched from Middleware after token authentication
    console.log("backend requser" + req.user);
    const user = await User.findById(req.user.id);
    req.session.user = user
    res.send({
      user: user,
    });
  } catch (e) {
    console.log(e);
    res.send({ message: "Error in Fetching user" });
  }
});
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/confirmation", auth.confirmationPost);
router.post("/resend", auth.resendTokenPost);
router.post("/passwordEmail", auth.passwordResetEmail);
router.post("/resetPassword", auth.resetPassword);

router.post("/upload", (req, res) => {
  upload(req, res, (error) => {
    if (error) {
      res.redirect('/?msg=3');
    } else {
      if (req.file == undefined) {

        res.redirect('/?msg=2');
      } else {

        /**
         * Create new record in mongoDB
         */
        var fullPath = "files/" + req.file.filename;
        var document = {
          path: fullPath,
          user: req.body.caption
        };

        var photo = new Photo(document);
        photo.save(function (error) {
          if (error) {
            throw error;
          }
          res.redirect('/?msg=1');
        });
      }
    }
  });
})

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user) {
    socket.addUser(req.user, socket.getSocketFromSocketID(req.body.socketid));
    res.send({ init: true });
  } else res.send({ init: false });
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

router.post("/leaderboard", auth.ensureLoggedIn, (req, res) => {
  User.find({}).then((users) => {
    users.sort((a, b) => {
      if (a.rating > b.rating) {
        return -1
      }
      return 1
    })
    res.send({ leaderboard: users.slice(0, 10) })
  })
})
router.post("/queue", auth.ensureLoggedIn, queue.queue);
router.post("/dequeue", auth.ensureLoggedIn, queue.dequeue);
router.post("/getGame", auth.ensureLoggedIn, queue.getGame);

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
