const User = require("../Model/user.model");

async function getAllUsers(req, res) {
  try {
    let allUsers = await Course.find();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function getUser(req, res) {
  let id = req.params.id;
  try {
    let couse = await User.findById(id);
    res.status(200).json(couse);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function createUser(req, res) {
  const newUser = new User({
    user_first_name: req.body.user_first_name,
    user_last_name: req.body.user_last_name,
    user_date_nasc: req.body.user_date_nasc,
    user_city: req.body.user_city,
    user_state: req.body.user_state,
    user_phone: req.body.user_phone,
    user_email: req.body.user_email,
    user_role: req.body.user_role,
  });

  try {
    let nUser = await newUser.save();
    res.status(200).json(nUser);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
//optional
async function updateUser(req, res) {
  try {
    let courseUpdated = await Course.updateOne(
      { _id: req.params.id },
      {
        $set: {
          user_first_name: req.body.user_first_name,
          user_last_name: req.body.user_last_name,
          user_date_nasc: req.body.user_date_nasc,
          user_city: req.body.user_city,
          user_state: req.body.user_state,
          user_phone: req.body.user_phone,
          user_email: req.body.user_email,
          user_role: req.body.user_role,
        },
      }
    );
    res.status(200).json(courseUpdated);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function deleteUser(req, res) {
  let id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json("Well Done!");
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
