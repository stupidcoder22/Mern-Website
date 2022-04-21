const express = require("express");
const router = express.Router();
const Userschema = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtKey = "secret";

router.get("/", (req, res) => {
  res.send("home page router");
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, pass, repass } = req.body;
  if (!name || !email || !phone || !work || !pass || !repass) {
    return res.status(401).json({ error: "Please fill the data Properly" });
  }
  try {
    const emailCheck = await Userschema.findOne({
      email: email,
    });
    if (emailCheck) {
      return res.status(401).json({ error: "Email already exist" });
    }

    if (pass != repass) {
      return res
        .status(401)
        .json({ error: "password and confirm password should be same" });
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
      id: user._id.toString(),
    };
    const token = jwt.sign(data, jwtKey);
    res.send({ user: user, token: token });
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
      return res.status(401).json({ error: "Email doesn't exist" });
    }

    const val = await bcrypt.compare(pass, userdata.pass);
    if (val) {
      const data = {
        id: userdata._id.toString(),
      };
      const token = jwt.sign(data, jwtKey);
      res.json({ info: "You have logged in succesfully", token: token });
    } else {
      res.json("wrong password");
    }

    // if (val) {
    //   jwt.sign({ userdata }, jwtKey, (err, token) => {
    //     if (err) {
    //       res.send({ result: "something went wrong" });
    //     }
    //     res.json({ userdata: userdata, token: token });
    //   });
    // } else {
    //   res.status(403).json("Wrong Password");
    // }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
