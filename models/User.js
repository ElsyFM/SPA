const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true},
    username: { type: String, required: true },
    password: { type: String, required: true },
    userType: { type: String, required: true },
  },
  { discriminatorKey: "userType" }
);

const User = mongoose.model("User", userSchema);
module.exports = User;