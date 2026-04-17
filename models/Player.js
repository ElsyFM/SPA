const mongoose = require("mongoose");
const User = require("./User");

const Player = User.discriminator("player", new mongoose.Schema({
    age: {type: Number, required: true},
    position:  {type: String, required: true},
    team: {type: String, required: true},

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