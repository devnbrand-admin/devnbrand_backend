const AdminContent = require('../models/adminContentModel');

// Create a new content (POST)
exports.createContent = async (req, res) => {
    try {
        const { line1, line2, backgroundImage } = req.body;

        const newContent = new AdminContent({ line1, line2, backgroundImage });
        await newContent.save();

        res.status(201).json({
            success: true,
            data: newContent,
            message: "Content created successfully."
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: "Server Error: Unable to create content."
        });
    }
};

// Get all content (GET)
exports.getAllContent = async (req, res) => {
    try {
        const content = await AdminContent.find();
        res.status(200).json({
            success: true,
            data: content
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: "Server Error: Unable to fetch content."
        });
    }
};

// Get content by ID (GET)
exports.getContentById = async (req, res) => {
    try {
        const content = await AdminContent.findById(req.params.id);
        if (!content) {
            return res.status(404).json({
                success: false,
                error: "Content not found."
            });
        }
        res.status(200).json({
            success: true,
            data: content
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: "Server Error: Unable to fetch content by ID."
        });
    }
};

// Update content by ID (PUT)
exports.updateContent = async (req, res) => {
    try {
        const { line1, line2, backgroundImage } = req.body;

        const updatedContent = await AdminContent.findByIdAndUpdate(req.params.id, {
            line1,
            line2,
            backgroundImage
        }, { new: true });

        if (!updatedContent) {
            return res.status(404).json({
                success: false,
                error: "Content not found."
            });
        }

        res.status(200).json({
            success: true,
            data: updatedContent,
            message: "Content updated successfully."
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: "Server Error: Unable to update content."
        });
    }
};

// Delete content by ID (DELETE)
exports.deleteContent = async (req, res) => {
    try {
        const deletedContent = await AdminContent.findByIdAndRemove(req.params.id);

        if (!deletedContent) {
            return res.status(404).json({
                success: false,
                error: "Content not found."
            });
        }

        res.status(200).json({
            success: true,
            data: deletedContent,
            message: "Content deleted successfully."
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: "Server Error: Unable to delete content."
        });
    }
};
