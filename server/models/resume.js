const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema({
    path:  { type: String },
    user_id: { type: String },
});

// compile model from schema
module.exports = mongoose.model("resume", ResumeSchema);
