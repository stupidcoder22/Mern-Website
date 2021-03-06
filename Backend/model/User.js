const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  work: { type: String, required: true },
  pass: { type: String, required: true },
  repass: { type: String, required: true },
  date: { type: Date, default: Date.now },
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Contact",
      default: [],
    },
  ],
});

module.exports = mongoose.model("USER", Userschema);
