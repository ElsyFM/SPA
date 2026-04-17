const mongoose = require("mongoose");
const User = require("./User");

Player = User.discriminator("Player", new mongoose.Schema({
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
}))

module.exports = Player;