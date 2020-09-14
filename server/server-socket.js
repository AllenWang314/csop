let io;

const User = require("./models/user")
const Game = require("./models/game")

const userToSocketMap = {}; // maps user ID to socket object
const socketToUserMap = {}; // maps socket ID to user object

const getSocketFromUserID = (userid) => userToSocketMap[userid];
const getUserFromSocketID = (socketid) => socketToUserMap[socketid];
const getSocketFromSocketID = (socketid) => io.sockets.connected[socketid];

const addUser = (user, socket) => {
  const oldSocket = userToSocketMap[user._id];
  if (oldSocket && oldSocket.id !== socket.id) {
    // there was an old tab open for this user, force it to disconnect
    // FIXME: is this the behavior you want?
    oldSocket.disconnect();
    delete socketToUserMap[oldSocket.id];
  }

  userToSocketMap[user._id] = socket;
  socketToUserMap[socket.id] = user;
};

const removeUser = (user, socket) => {
  if (user) delete userToSocketMap[user._id];
  delete socketToUserMap[socket.id];
};

module.exports = {
  init: (http) => {
    io = require("socket.io")(http);

    io.on("connection", (socket) => {
      console.log(`socket has connected ${socket.id}`);
      socket.on("disconnect", (reason) => {
        console.log("a disconnect ", reason);
        if (reason === "server namespace disconnect") {
          console.log("SEERVER DISCONNECT");
          return;
        }
        const user = getUserFromSocketID(socket.id);

        if (user) {
          User.findById(user._id).then((myUser) => {
            if (myUser.gameId === "") {
              removeUser(user, socket);
              return;
            }
            let oldGameId = myUser.gameId;
            Game.findById(oldGameId).then((game) => {
              if (game.userIds.includes(user._id)) {
                console.log(game.userIds.length);
                game.userIds = game.userIds.filter((id) => {
                  return id !== user._id;
                });
                game.save().then(() => {
                  getSocketFromUserID(user._id)
                    .to("Game: " + game._id)
                    .emit("userLeft", { game: game, user:user});
                  getSocketFromUserID(user._id).leave("Game: " + game._id);
                  myUser.gameId = "";
                  myUser.save().then(() => {
                    removeUser(user, socket);
                  });
                });
              } else {
                removeUser(user, socket);
              }
            });
          });
        } else {
          removeUser(user, socket);
        }
      });
    });
  },

  addUser: addUser,
  removeUser: removeUser,

  getSocketFromUserID: getSocketFromUserID,
  getUserFromSocketID: getUserFromSocketID,
  getSocketFromSocketID: getSocketFromSocketID,
  getIo: () => io,
};
