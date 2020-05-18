//"use strict";
const mongoose = require("mongoose");
//const MongoClient = require("mongodb").MongoClient;
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, require: true, minlength: 3 },
    userid: {
      type: String,
      require: true,
      unique: true,
      minlength: 5,
      trim: true,
    },
    password: { type: String, require: true, unique: true, minlength: 6 },
    subject: { type: String, require: true },
    dateOfJoining: { type: Date, require: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
