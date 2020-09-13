const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  // username: String,
  college: String,
  email: { type: String, unique: true },
  password: String,
  passwordResetToken: String,
  passwordResetExpires: Date,
  isVerified: {
    type: Boolean,
    default: false,
  },
  gameId: {
    type: String,
    default: "",
  },
  resumeLink: String,
});

// compile model from schema
module.exports = mongoose.model("user", UserSchema);
