let mongoose = require("mongoose");
let userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
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
  },
  rating: {
    type: Number,
    default: 0
  },
  avatar: {
    type: String,
    default:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png"
  }
});

module.exports = mongoose.model("user", userSchema);
