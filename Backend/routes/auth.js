const express = require("express");
const router = express.Router();
const Userschema = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtKey = "secret";
var authentication = require("../middleware/Authenticate");
const Contact = require("../model/Contact");

router.get("/", authentication, (req, res) => {
  const uid = req.user;
  res.json({ uid: uid, msg: true });
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, pass, repass } = req.body;
  if (!name || !email || !phone || !work || !pass || !repass) {
    return res
      .status(401)
      .json({ error: "Please fill the data Properly", msg: false });
  }
  try {
    const emailCheck = await Userschema.findOne({
      email: email,
    });
    if (emailCheck) {
      return res.status(401).json({ error: "Email already exist", msg: false });
    }

    if (pass != repass) {
      return res.status(401).json({
        error: "password and confirm password should be same",
        msg: false,
      });
    }

    const secure = await bcrypt.hash(pass, 10);

    const userdata = await new Userschema({
      name,
      email,
      phone,
      work,
      pass: secure,
      repass: secure,
    });
    const user = await userdata.save();

    const data = {
      user: user._id.toString(),
    };
    const token = jwt.sign(data, jwtKey);
    res.json({ user: user, token: token, msg: true });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  if (!email || !pass) {
    return res.status(400).json({ error: "Please fill the data Properly" });
  }

  try {
    const userdata = await Userschema.findOne({ email: email });
    if (!userdata) {
      return res.status(422).json({ error: "Email doesn't exist" });
    }

    const val = await bcrypt.compare(pass, userdata.pass);
    if (val) {
      const data = {
        user: userdata._id.toString(),
      };
      const token = jwt.sign(data, jwtKey);
      res.json({
        msg: true,
        info: "You have loged in succesfully",
        token: token,
      });
    } else {
      res.json({ msg: false });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/getdata", authentication, async (req, res) => {
  try {
    const uid = req.user;
    const userdata = await Userschema.findById(uid);
    res.json({ userdata: userdata, msg: true });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("internal server error");
  }
});

router.get("/about", authentication, async (req, res) => {
  const uid = req.user;
  const userdata = await Userschema.findById(uid);
  res.json({ userdata: userdata, msg: true });
});

router.post("/contact", authentication, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.json({ error: "please fill contact form", msg: false });
    }
    const userdata = await Userschema.findById(req.user);
    const value = await Contact({
      name,
      email,
      phone,
      message,
    });
    await value.save();
    userdata.messages.push(value);
    userdata.save();
    return res.status(200).json({ userdata });
  } catch (error) {
    console.log("error", error);
    res.json({ error: error, msg: false });
  }
});

module.exports = router;
