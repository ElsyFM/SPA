const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  user: { type: String, required: true },
  password: { type: String, required: true },

  age: Number,
  position: String,
  team: String,

  logs: [
    {
      date: { type: Date, default: Date.now },
      attendance: Boolean,
      playTime: Number,
     PAC: { type: Number, min: 0, max: 100 },
     SHO: { type: Number, min: 0, max: 100 },
     PAS: { type: Number, min: 0, max: 100 },
     DRI: { type: Number, min: 0, max: 100 },
     DEF: { type: Number, min: 0, max: 100 },
     PHY: { type: Number, min: 0, max: 100 }
    }
  ]
});

module.exports = mongoose.model("Player", playerSchema);