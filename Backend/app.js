const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => {
  res.send("this is home page");
});

app.get("/about", (req, res) => {
  res.send("this is about page");
});

app.get("/contact", (req, res) => {
  res.send("this is contact page");
});

app.get("/signup", (req, res) => {
  res.send("this is signup page");
});

app.get("/signin", (req, res) => {
  res.send("this is signin page");
});

app.listen(1000, () => {
  console.log("server is running at 1000");
});
