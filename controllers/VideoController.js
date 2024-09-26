const Video = require('../models/Video'); // Assuming the model is in models/videoModel.js

// Create a new video
exports.createVideo = async (req, res) => {
  try {
    const {  title, video_url, uploaded_by, duration ,tags,thumbnail_url} = req.body;
  console.log(title)
  // Check if the required fields are present
  if (!title || !video_url || !uploaded_by || !uploaded_by.username || !duration) {
    return res.status(400).json({
      message: 'Missing required fields:  title, video_url, uploaded_by (username), or duration',
    });
  }
  const video = new Video({
    title: title,          // Video title
    video_url: video_url,  // Video URL
    uploaded_by: uploaded_by, // Uploaded by (object containing username)
    duration: duration ,
    tags:tags  ,
    thumbnail_url:thumbnail_url  // Video duration
  });
    await video.save();
    res.status(201).json({
      sucess:true,
      message: 'Video saved successfully',
      video
    }); // Return the created video
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all videos
exports.getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.status(201).json({
      sucess:true,
      videos
    }); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get video by ID
exports.getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }
    res.status(201).json({
      sucess:true,
      video
    }); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update video by ID
exports.updateVideo = async (req, res) => {
  try {
    const video = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }
    res.status(201).json({
      sucess:true,
      message: 'Video Updated successfully',
      video
    });  // Return the updated video
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete video by ID
exports.deleteVideo = async (req, res) => {
  try {
    const video = await Video.findByIdAndDelete(req.params.id);
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }
    res.json({ message: 'Video deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
