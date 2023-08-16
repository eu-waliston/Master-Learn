const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  first_name: { String, required: true },
  last_name: { String, required: true },
  date_nasc: { Date, required: true },
  city: { String, required: true },
  state: { String, required: true },
  phone: { String },
  email: { String, required: true },
  role: { String },
});

module.exports = mongoose.model("User", UserSchema);
