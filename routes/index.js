const express = require("express");
const router = express.Router();
const authRoutes = require("./auth");
// Import other route groups as needed

router.use("/auth", authRoutes);
// Use other route groups with their respective base paths

module.exports = router;
