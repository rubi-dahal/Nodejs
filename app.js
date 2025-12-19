const express = require("express");
const connect = require("./DataBase/connection");
const User = require("./models/userModel");
const Blog = require("./models/BlogModel");
const app = express();

connect();

app.get("/", function (req, res) {
  res.json({
    name: "Home page",
  });
});

app.get("/about", function (req, res) {
  res.json({
    name: "About page",
    address: "Dharan",
    age: "5",
  });
});

app.listen(3000, function () {
  console.log("server has started at port 3000");
});

app.get("/fetch-users", async function (req, res) {
  //user table ma bhako user data chai sent garnu paryo
  const data = await User.find(); //.create() .findByIdAndDelete() .findByIdAndUpdate()
  res.json({
    data: data,
  });
});

app.get("/fetch-blogs", async function (req, res) {
  const data = await Blog.find();
  res.json({
    data: data,
  });
});
