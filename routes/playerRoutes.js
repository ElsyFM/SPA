const express = require("express");
const router = express.Router();
const Player = require("../models/Player");
const User = require("../models/User");

router.post("/create-test", async (req, res) => {
  try {
    const test_username = "Egg"

    const existing = await User.findOne({ username: test_username});

    if (existing) {
      return res.json("Player already exists");
    }

    const player = new Player({
      name: "Aegon Targaryen",
      username: test_username,
      password: "password4",
      userType: "player",
      age: 10,
      position: "Midfielder",
      team: "The Largest"
    });

    await player.save();

    res.json("Test player created");
  } catch (err) {
    res.status(500).json("Error creating player");
  }
});

module.exports = router;