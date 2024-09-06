const express = require('express');
const { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog, searchBlogsByTag } = require('../controllers/Blog');

const router = express.Router();

router.post("/create",createBlog);


// Create a new blog


// Get all blogs
router.get('/get',getAllBlogs);

// Get a single blog by ID
router.get('/blog/:id',getBlogById);

// Update a blog by ID
router.put('/updateBlog/:id',updateBlog);

// Delete a blog by ID
router.delete('/deleteBlog/:id', deleteBlog);

router.get('/blogs/tag/:tag', searchBlogsByTag);

module.exports = router;


