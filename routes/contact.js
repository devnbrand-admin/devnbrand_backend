// contactRoutes.js

const express = require('express');
const { submitContactForm } = require('../controllers/contactform');

const router = express.Router();

// Route to submit the contact form
router.post('/submit', submitContactForm);

module.exports = router;
