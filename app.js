const express = require("express");
const connect = require("./DataBase/connection");
const User = require("./models/userModel");
const Blog = require("./models/BlogModel");
const app = express();
const bcrypt = require("bcrypt");

connect();
app.use(express.json());

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

app.post("/register", async function (req, res) {
  //console.log(req.body); data will be in request.body
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  // const {name, email, password} = req.body
  //console.log(name)
  //console.log(password)
  await User.create({
    name: name,
    email: email,
    password: bcrypt.hashSync(password, 10),
  });
  res.json({
    message: "User registered Successfully!!!",
  });
});

app.post("/Post-blog", async function (req, res) {
  const title = req.body.title;
  const subtitle = req.body.subtitle;
  const description = req.body.description;
  await Blog.create({
    title: title,
    subtitle: subtitle,
    description: description,
  });
  res.json({
    message: "Blog Posted Successfully!!!",
  });
});

app.delete("/delete-blog", async function (req, res) {
  const id = req.body.id;
  await Blog.findByIdAndDelete(id);
  res.json({
    message: "Blog with this id deleted Successfully!!!",
  });
});

// app.put("/edit-blog", async function (req, res) {
//   const id = req.body.id;
//   await Blog.updateOne({ _id: id }, { title, content });

//   res.json({
//     message: "Blog with this id is updated Successfully!!!",
//   });
// });
