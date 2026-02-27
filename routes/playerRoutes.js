const express = require("express");
const router = express.Router();
const Player = require("../models/Player");



router.post("/", async (req, res) => {
    // temp 
    console.log("POST /api/players route hit!", req.body); // log here
  try {
    const player = new Player(req.body);
    const savedPlayer = await player.save();
    res.status(201).json(savedPlayer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
