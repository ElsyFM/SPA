const express = require("express");
const router = express.Router();
const Parent = require("../models/Parent");

// CREATE Parent
router.post("/", async (req, res) => {
  try {
    const Parent = new Parent(req.body);
    const savedParent = await Parent.save();
    res.status(201).json(savedParent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET All Parents
router.get("/", async (req, res) => {
  try {
    const Parents = await Parent.find();
    res.json(Parents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;