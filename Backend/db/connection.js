const mongoose = require("mongoose");

const DB =
  "mongodb+srv://root:rootroot@cluster0.9borb.mongodb.net/MERNWEBSITE?retryWrites=true&w=majority";

const database = async () => {
  const connect = await mongoose.connect(DB);
  if (connect) {
    console.log("connected to database");
  } else {
    console.log("database error");
  }
};

module.exports = database;
