const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 100,
  },
  subtitle:{
    type: String,
    minlength: 10,
  },
  category:{
    type: String,
  },
  content: {
    type: String,
    required: true,
    minlength: 20,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  tags: {
    type: [String], // Array of strings for tags
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  isPublished: {
    type: Boolean,
    default: false,
  },
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
