const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models"); // Import the User model

const router = express.Router();

router.get("", (req, res) => {
  res.send("Hello gozal");
});

// Registration endpoint
router.post("/register", async (req, res) => {
  console.log(req);
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash password

    const user = await User.create({
      username,
      email,
      password_hash: hashedPassword,
    });

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login endpoint
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password_hash))) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    const token = jwt.sign({ userId: user.id }, "YOUR_SECRET_KEY", {
      expiresIn: "1h",
    }); // Replace 'YOUR_SECRET_KEY' with your actual secret key

    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
