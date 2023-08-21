const express = require("express");
const {
  getAllCourses,
  getCouse,
  createCouse,
  updateCouse,
  deleteCouse,
} = require("../Controller/course.controller");

const CouseRouter = express.Router();

CouseRouter.get("users/", getAllUsers);
CouseRouter.get("users/:id", getUser);
CouseRouter.post("users/", createUser);
CouseRouter.put("users/:id", updateUser);
CouseRouter.delete("users/:id", deleteUser);

module.exports = CouseRouter;
