const db = require("./src/db");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./src/models/user.model");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log("API ACCESSED AT /");
  res.send(
    '<h1 style="color: red; text-align: center; font-size: 40px;">Suite 16 Hackathon Backend</h1>'
  );
});

app.listen(5000, () => console.log("Listening on 5000..."));
