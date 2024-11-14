const express = require('express');
const router = express.Router();
const videoController = require('../controllers/VideoController')

// Routes for managing videos
router.post('/videos', videoController.createVideo);          // Create a new video
router.get('/get/videos', videoController.getAllVideos);          // Get all videos
router.get('/videos/:id', videoController.getVideoById);      // Get a video by ID
router.put('/update/videos/:id', videoController.updateVideo);       // Update a video by ID
router.delete('/del/videos/:id', videoController.deleteVideo);    // Delete a video by ID

module.exports = router;
