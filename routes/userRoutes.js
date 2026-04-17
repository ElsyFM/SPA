const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/create-user", async (req, res) => {
  try {
    const { name, username, password, userType } = req.body;

    const existing = await User.findOne({ username });
    
    if (existing) {
        return res.json("User already exists");
    }

    const models = {
      admin: require("../models/Admin"),
      coach: require("../models/Coach"),
      player: require("../models/Player"),
      parent: require("../models/Parent")
    };

    const Model = models[userType];

    if (!Model) return res.status(400).json("Invalid User Type");

    const newUser = await Model.create({ ...req.body, userType });

    //res.json(newUser);
    return res.json("User creation sucessful")
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post("/delete-user", async (req, res) => {
  try {
    const { username } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.json("User does not exist");
    };

    const guh = await User.findByIdAndDelete(user._id);
    return res.json("User deletion sucessful", guh);

  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post("/login", async (req, res) => {
  const { username, password, userType } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json("Invalid username or password");
    }

    // Compare passwords
    if (password !== user.password) {
        return res.status(400).json("Invalid username or password");
    }

    // Send response
    // Totally insucure so we should fix later
    res.json( user.userType );

  } catch (err) {
    res.status(500).json("Server error");
  }
});

module.exports = router;