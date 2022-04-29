const express = require("express");
const router = express.Router();
const Userschema = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtKey = "secret";
var authentication = require("../middleware/Authenticate");

router.get("/", authentication, (req, res) => {
  res.send("home page router");
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

router.get("/getuser", authentication, async (req, res) => {
  try {
    console.log(req.user.id);
    const userid = req.user.id;
    const user = await Userschema.findById(userid).select("-pass");
    res.send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("internal server error");
  }
});

module.exports = router;
