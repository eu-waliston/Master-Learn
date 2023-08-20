const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({
  couse_video_url: { type: String, required: true },
  couse_name: { type: String, required: true, unique: true },
  couse_duration: { type: Number, required: true },
  couse_description: { type: String, required: true },
});

module.exports = mongoose.model("Courses", CourseSchema);
