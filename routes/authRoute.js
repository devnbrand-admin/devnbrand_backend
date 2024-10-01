// routes/authRoutes.js
const express = require("express");
const { signup, login } = require("../controllers/AuthController"); // Adjust the path based on your file structure

const router = express.Router();

// Signup route
router.post("/signup", signup);

// Login route
router.post("/login", login);

module.exports = router;
