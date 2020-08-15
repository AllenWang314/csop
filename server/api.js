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

// import models so we can interact with the database
const User = require("./models/user");

// import authentication library
const auth = require("./auth");

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

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
