const mongoose = require("mongoose");

const coachSchema = new mongoose.Schema({
  name: { type: String, required: true },
  user: { type: String, required: true },
  password: { type: String, required: true },
  team: String,

});

module.exports = mongoose.model("Coach", coachSchema);