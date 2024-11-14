// contactController.js

const Contact = require('../models/contact');

// Controller function to handle contact form submission
const submitContactForm = async (req, res) => {
  try {
    const { date, time_allotment, scheduled_time, fullname, email, phone_no, budget, message } = req.body;

    // Create a new contact document
    const newContact = new Contact({
      date,
      time_allotment,
      scheduled_time,
      fullname,
      email,
      phone_no,
      budget,
      message
    });

    // Save the contact document to MongoDB
    await newContact.save();

    // Send a success response
    res.status(201).json({ message: 'Contact form submitted successfully', contact: newContact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { submitContactForm };
