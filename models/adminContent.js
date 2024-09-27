const mongoose = require("mongoose");

const adminContentSchema = new mongoose.Schema({
  line1: { 
    type: String, 
    required: true 
},
  line2: {
     type: String,
      required: true
     },
  backgroundImage:
   { 
    type: String, 
    required: true
 }, // URL of the uploaded image
},{timestamps: true});

const AdminContent = mongoose.model("AdminContent", adminContentSchema);
