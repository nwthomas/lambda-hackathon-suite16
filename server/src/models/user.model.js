let mongoose = require("mongoose");
let userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  dob: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  creds: {
    type: String,
    required: true
  },
  cats: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("user", userSchema);
