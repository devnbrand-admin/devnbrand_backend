const express = require('express');
const router = express.Router();

const { createContent, getAllContent, getContentById, updateContent, deleteContent } = require('../controllers/ContentController');

// Routes for CRUD operations
router.post('/create', createContent); // Create new content
router.get('/get', getAllContent);        // Get all content
router.get('/:id', getContentById);   // Get content by ID
router.put('/update/:id', updateContent); // Update content by ID
router.delete('/delete/:id', deleteContent); // Delete content by ID

module.exports = router;
