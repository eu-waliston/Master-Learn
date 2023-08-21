const Course = require("../Model/course.model");

async function getAllCourses(req, res) {
  try {
    let allCourses = await Course.find();
    res.status(200).json(allCourses);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function getCouse(req, res) {
  let id = req.params.id;
  try {
    let couse = await Course.findById(id);
    res.status(200).json(couse);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function createCouse(req, res) {
  const newCouse = new Course({
    couse_video_url: req.body.couse_video_url,
    couse_name: req.body.couse_name,
    couse_duration: req.body.couse_duration,
    couse_description: req.body.couse_description,
  });

  try {
    let nCouse = await newCouse.save();
    res.status(200).json(nCouse);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
//optional
async function updateCouse(req, res) {
  try {
    let courseUpdated = await Course.updateOne(
      { _id: req.params.id },
      {
        $set: {
          couse_video_url: req.body.couse_video_url,
          couse_name: req.body.couse_name,
          couse_duration: req.body.couse_duration,
          couse_description: req.body.couse_description,
        },
      }
    );
    res.status(200).json(courseUpdated);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function deleteCouse(req, res) {
  let id = req.params.id;
  try {
    await Course.findByIdAndDelete(id);
    res.status(200).json("Well Done!");
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

module.exports = {
  getAllCourses,
  getCouse,
  createCouse,
  updateCouse,
  deleteCouse
};
