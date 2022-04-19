const express = require("express");
const app = express();
const database = require("./db/connection");
const Userschema = require("./User");

database();

app.use(express.json());

app.post("/", async (req, res) => {
  res.json("home page");
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
