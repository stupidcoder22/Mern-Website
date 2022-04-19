const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("user", Userschema);
