const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    teamName: { type: String, required: true},
    numGames: { type: Number},
    numPlayers: { type: Number},
    numWins: { type: Number},
    numLosses: { type: Number},
    numTies: { type: Number},
    numGames: { type: Number},
  }
);

const Team = mongoose.model("Team", teamSchema);
module.exports = Team;