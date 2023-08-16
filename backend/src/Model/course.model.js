const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({
  video_url: { type: String, required: true },
  name: { type: String, required: true, unique: true },
  duration: { type: Number, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model("Courses", CourseSchema);
