const express = require("express");
const router = express.Router();
const Coach = require("../models/Coach");
const User = require("../models/User");

router.post("/create-test", async (req, res) => {
  try {
    const existing = await User.findOne({ username: "BigXthaCoach" });

    if (existing) {
      return res.json("Coach already exists");
    }

    const coach = new Coach({
      name: "JohnCoach",
      username: "BigXthaCoach",
      password: "password2",
      userType: "coach",
      team: "The Largest"
    });

    await coach.save();

    res.json("Test coach created");
  } catch (err) {
    res.status(500).json("Error creating coach");
  }
});

module.exports = router;