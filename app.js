const express = require("express");
const app = express();

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
