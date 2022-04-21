const express = require("express");
const router = express.Router();
const Userschema = require("../model/User");

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

    const userdata = await new Userschema(req.body);
    const user = await userdata.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
