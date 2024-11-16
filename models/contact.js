// contactModel.js

const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  date: {
    type: Date
  },
  time_allotment: {
    type: String
  },
  scheduled_time: {
    type: String
  },
  fullname: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address']
  },
  phone_no: {
    type: String,
    match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number']
  },
  budget: {
    type: Number
  },
  message: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Contact', contactSchema);
