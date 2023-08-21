const express = require("express");
const {
  getAllCourses,
  getCouse,
  createCouse,
  updateCouse,
  deleteCouse,
} = require("../Controller/course.controller");

const CourseRouter = express.Router();

CourseRouter.get("users/", getAllUsers);
CourseRouter.get("users/:id", getUser);
CourseRouter.post("users/", createUser);
CourseRouter.put("users/:id", updateUser);
CourseRouter.delete("users/:id", deleteUser);

module.exports = CourseRouter;
