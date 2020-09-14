require("dotenv").config();
const { OAuth2Client } = require("google-auth-library");
const User = require("./models/user");
const Comment = require("./models/comment");
const GroupPost = require("./models/groupPost");
const Lounge = require("./models/lounge");
const Message = require("./models/message");
const Page = require("./models/page");
const School = require("./models/school");
const Resume = require("./models/resume");
const Game = require("./models/game");
const socket = require("./server-socket");

const path = require("path");
const mongoose = require("mongoose");
const multer = require("multer");
const game = require("./models/game");

async function queue(req,res) {
    console.log(req.user._id)
    Game.findOne({status: "inQueue"}).then((game) => {
        if(!game) {
            let newGame = new Game({
                timestamp: Date.now(),
                userIds: [req.user._id],
                status: "inQueue",
            })
            newGame.save().then((newGameMongo)=> {
                User.findById(req.user._id).then((user)=> {
                    user.gameId = newGameMongo._id
                    user.save().then(()=> {
                        socket.getSocketFromUserID(req.user._id).join("Game: " + newGameMongo._id);
                        res.send({game:newGameMongo})
                    })
                })
            })
        }
        else {
            if (!game.userIds.includes(req.user._id)) {
                game.userIds.push(req.user._id);
            }
            if (game.userIds.length >= 6) {
                game.status = "inGame"
            }
            game.save().then(() => {
                User.findById(req.user._id).then((user)=> {
                    user.gameId = game._id
                    user.save().then(()=> {
                        socket.getSocketFromUserID(req.user._id).to("Game: " + game._id).emit("userQueued", {game: game, user:req.user})
                        if(game.status === "inGame") {
                            socket.getSocketFromUserID(req.user._id).to("Game: " + game._id).emit("gameStart", {game: game})
                        }
                        socket.getSocketFromUserID(req.user._id).join("Game: " + game._id)
                        res.send({game:game})
                    })
                })
            });
        }
    })
}

async function dequeue(req,res) {
    Game.findById(req.body.gameId).then((game)=> {
        game.userIds = game.userIds.filter((userId) => {
            return userId !== req.user._id
        })
        game.save().then(()=> {
            User.findById(req.user._id).then((user)=> {
                user.gameId = ""
                user.save().then(()=> {
                    socket.getSocketFromUserID(req.user._id).leave("Game: " + game._id);
                    socket.getSocketFromUserID(req.user._id).to("Game: " + game._id).emit("userLeft", {game: game, user:req.user})
                    res.send({game:game})
                })
            })
        })
    })
}

async function getGame(req,res) {
    Game.findById(req.user.gameId).then((game)=> {
        res.send({game:game})
    })
}

module.exports = {
    queue,
    dequeue,
    getGame,
};