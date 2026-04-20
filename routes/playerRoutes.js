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

router.post("/edit-player", async (req, res) => {
  try {
    const {
        name,
        age,
        position,
        team
    } = req.body;

    const player = await Player.findOne({ name });

    if (!player) {
      return res.json("Player does not exist");
    };

    const updatedPlayer = await Player.findOneAndUpdate(
      { name },
      {
        age,
        position,
        team
      },
      { new: true }
    );

    return res.json({
        message: "Player update successful",
        team: updatedPlayer
    });

  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post("/view-player", async (req, res) => {
  try {
    const {
        name
    } = req.body;

    const player = await Player.findOne({ name });

    if (!player) {
      return res.json("Player does not exist");
    };

    return res.json({
        message: "Found player",
        player: player
    });

  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post("/add-log", async (req, res) => {
  try {
    const {
      name,
      attendance,
      playTime,
      PAC,
      SHO,
      PAS,
      DRI,
      DEF,
      PHY
    } = req.body;

    const player = await Player.findOne({ name });

    if (!player) {
      return res.json({ message: "Player does not exist" });
    }

    const newLog = {
      date: new Date(),
      attendance,
      playTime,
      PAC,
      SHO,
      PAS,
      DRI,
      DEF,
      PHY
    };

    const updatedPlayer = await Player.findOneAndUpdate(
      { name },
      {
        $push: { logs: newLog }
      },
      { new: true }
    );

    return res.json({
      message: "Log added successfully",
      player: updatedPlayer
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;