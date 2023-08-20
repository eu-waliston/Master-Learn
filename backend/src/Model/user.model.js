const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  user_first_name: { String, required: true },
  user_last_name: { String, required: true },
  user_date_nasc: { Date, required: true },
  user_city: { String, required: true },
  user_state: { String, required: true },
  user_phone: { String, requierd: true },
  user_email: { String, required: true },
  user_role: { String, required: true },
});

module.exports = mongoose.model("User", UserSchema);
