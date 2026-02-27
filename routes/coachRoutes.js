const express = require("express");
const router = express.Router();
const Coach = require("../models/Coach");


// CREATE Coach
router.post("/", async (req, res) => {
  try {
    const Coach = new Coach(req.body);
    const savedCoach = await Coach.save();
    res.status(201).json(savedCoach);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET All Coachs
router.get("/", async (req, res) => {
  try {
    const Coachs = await Coach.find();
    res.json(Coachs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;