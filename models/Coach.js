const mongoose = require("mongoose");
const User = require("./User");

const Coach = User.discriminator("coach", new mongoose.Schema({
    team: String,
}));

module.exports = Coach;