const mongoose = require("mongoose");
const User = require("./User");

const Parent = User.discriminator("parent", new mongoose.Schema({
  childUsername: { type: String, required: true}
}));

module.exports = Parent;

