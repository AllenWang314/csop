const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({ 
  timestamp: {
    type: Date,
    default: Date.now
  },
  userIds: {
      type: Array,
      default: []
  },
  link: String,
  status: String,
});

// compile model from schema
module.exports = mongoose.model("game", GameSchema);
