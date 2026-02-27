const mongoose = require("mongoose");

const parentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  user: { type: String, required: true },
  password: { type: String, required: true },
  
});

module.exports = mongoose.model("Parent", parentSchema);