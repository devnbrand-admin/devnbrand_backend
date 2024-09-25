const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  video_url: {
    type: String,
    required: true,
  },
  thumbnail_url: {
    type: String,
  },
  uploaded_by: {
    username: {
      type: String,
      required: true,
    },
  },
  upload_date: {
    type: Date,
    default: Date.now, // Automatically sets the upload date to the current date
  },
  tags: [
    {
      type: String,
    },
  ],
  duration: {
    type: Number, // Integer for video duration (e.g., in seconds)
    required: true,
  },
});

module.exports = mongoose.model('Video', videoSchema);
