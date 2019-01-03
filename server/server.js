const db = require("./src/db");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./src/models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("./src/middleware/check-auth");
const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get("/", (req, res) => {
  console.log("API ACCESSED AT /");
  res.send(
    '<h1 style="color: red; text-align: center; font-size: 40px;">Suite 16 Hackathon Backend</h1>'
  );
});

app.post("/api/users/register", (req, res) => {
  const {
    firstname,
    lastname,
    username,
    password,
    email,
    dob,
    location,
    creds,
    cats,
    role
  } = req.body;

  if (
    !firstname ||
    !lastname ||
    !username ||
    !password ||
    !email ||
    !dob ||
    !location ||
    !creds ||
    !cats ||
    !role
  ) {
    res.status(422).json({ message: "All Params Needed" });
  } else {
    bcrypt.hash(password, 14, (err, hash) => {
      if (err) {
        res.status(400).json({ message: "Saving User Failed" });
      }
      const newUser = new User({
        firstname,
        lastname,
        username,
        password: hash,
        email,
        dob,
        location,
        creds,
        cats,
        role
      });

      User.findOne({ username }, (err, user) => {
        if (err) {
          res.status(403).json(err);
        }

        if (user) {
          return res.json({ message: "Username Already Exists" });
        } else {
          newUser.save().then(() => {
            User.findOne({ username }, (err, user) => {
              if (err) {
                res.status(401).json({ message: "Error Quering The DB" });
              }
              res.json(user);
            });
          });
        }
      });
    });
  }
});

app.post("/api/users/login", (req, res) => {
  const { username, password } = req.body;
  let hashedPass = "";
  const hash = User.findOne({ username: username }, (err, user) => {
    if (err) {
      res.json({ message: "Auth Failed" });
    }
    bcrypt.compare(password, user.password, function(err, result) {
      if (result) {
        const loggedinUser = [];
        loggedinUser.push({
          username: user.username,
          firstname: user.firstname,
          lastname: user.lastname,
          rating: user.rating,
          avatar: user.avatar,
          email: user.email,
          dob: user.dob,
          location: user.location,
          creds: user.creds,
          role: user.role
        });
        const token = jwt.sign(
          { username: user.username, email: user.email },
          "thisislambdaschool",
          {
            expiresIn: "1h"
          }
        );
        res.json({ message: "successful login", token, user });
      } else {
        res.json({ message: "Login Failed" });
      }
    });
  });
});

app.get("/api/categories", (req, res) => {
  res.json([
    { id: 1, cat: "Taxes" },
    { id: 2, cat: "Investing" },
    { id: 3, cat: "Estate Planning" },
    { id: 4, cat: "Financial Planning" }
  ]);
});

app.get("/api/users", auth, (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.status(400).json({ message: "Error Retrieving Users" });
    }

    let userData = [];

    users.map(user => {
      userData.push({
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        rating: user.rating,
        avatar: user.avatar,
        email: user.email,
        dob: user.dob,
        location: user.location,
        creds: user.creds,
        role: user.role
      });
    });

    res.json(userData);
  });
});

app.listen(5000, () => console.log("Listening on 5000..."));
