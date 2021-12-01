const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

// mongoDB connection here
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true }, () => {
  console.log("connected to mongoDB");
});

// middlewares
// body parser
app.use(express.json());
// http headers
app.use(helmet());
// http request
app.use(morgan("common"));

// home page
app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});
// users page
app.get("/users", (req, res) => {
  res.send("Welcome to users page");
});

// server running here
app.listen(7000, () => {
  console.log("server is running! also nodemon running");
  console.log("http://localhost:7000");
});
