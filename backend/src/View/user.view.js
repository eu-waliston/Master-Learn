const express = require("express");
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../Controller/user.controller");

const UserRouter = express.Router();

UserRouter.get("users/", getAllUsers);
UserRouter.get("users/:id", getUser);
UserRouter.post("users/", createUser);
UserRouter.put("users/:id", updateUser);
UserRouter.delete("users/:id", deleteUser);

module.exports = UserRouter;
