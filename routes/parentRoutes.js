const express = require("express");
const router = express.Router();
const Parent = require("../models/Parent");
const User = require("../models/User");

router.post("/create-test", async (req, res) => {
  try {
    const test_username = "SirDuncanTheTall3"

    const existing = await User.findOne({ username: test_username});

    if (existing) {
      return res.json("Parent already exists");
    }

    const parent = new Parent({
      name: "Sir Duncan",
      username: test_username,
      password: "password3",
      userType: "parent",
      childUsername: "Egg"
    });

    await parent.save();

    res.json("Test parent created");
  } catch (err) {
    res.status(500).json("Error creating parent");
  }
});

module.exports = router;