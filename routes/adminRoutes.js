const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const User = require("../models/User");

router.post("/create-test", async (req, res) => {
  try {
    const existing = await User.findOne({ username: "JohnDoe123" });

    if (existing) {
      return res.json("Admin already exists");
    }

    const admin = new Admin({
      name: "Test Admin",
      username: "JohnDoe123",
      password: "password",
      userType: "admin"
    });

    await admin.save();

    res.json("Test admin created");

  } catch (err) {
    res.status(500).json("Error creating admin");
  }
});

module.exports = router;

