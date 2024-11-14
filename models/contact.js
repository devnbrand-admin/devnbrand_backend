// contactModel.js

const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  time_allotment: {
    type: String,
    required: true
  },
  scheduled_time: {
    type: String,
    required: true
  },
  fullname: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address']
  },
  phone_no: {
    type: String,
    required: true,
    match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number']
  },
  budget: {
    type: Number,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Contact', contactSchema);
