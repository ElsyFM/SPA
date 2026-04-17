const mongoose = require("mongoose");
const User = require("./User");

const Admin = User.discriminator("admin", new mongoose.Schema({}));

module.exports = Admin;