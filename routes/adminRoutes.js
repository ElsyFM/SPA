const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");

// CREATE Admin
router.post("/", async (req, res) => {
  try {
    const admin = new Admin(req.body);
    const savedAdmin = await admin.save();
    res.status(201).json(savedAdmin);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET All Admins
router.get("/", async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  const { user, password } = req.body;

  try {
    // Check if admin exists
    const admin = await Admin.findOne({ user });
    if (!admin) {
      return res.status(400).json("Invalid username or password");
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json("Invalid username or password");
    }

    // Send response
    // Totally insucure so we should fix later
    res.json( true );

  } catch (err) {
    res.status(500).json("Server error");
  }
});

router.post("/create-test-admin", async (req, res) => {
  try {
    const existing = await Admin.findOne({ user: "JohnDoe123" });

    if (existing) {
      return res.json("Admin already exists");
    }

    // hash password (IMPORTANT even for testing)
    const hashedPassword = await bcrypt.hash("password", 10);

    const admin = new Admin({
      name: "Test Admin",
      user: "JohnDoe123",
      password: hashedPassword
    });

    await admin.save();

    res.json("Test admin created");

  } catch (err) {
    res.status(500).json("Error creating admin");
  }
});

module.exports = router;

