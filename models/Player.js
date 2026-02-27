const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  user: { type: String, required: true },
  password: { type: String, required: true },
  age: Number,
  position: String,
  team: String,
  attendance: Number,
  playTime: Number,
  PAC: Number,
  SHO: Number,
  PAS: Number,
  DRI: Number,
  DEF: Number,
  PHY: Number
});

module.exports = mongoose.model("Player", playerSchema);

