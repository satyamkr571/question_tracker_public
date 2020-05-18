//"use strict";
const mongoose = require("mongoose");
//const MongoClient = require('mongodb').MongoClient;
const Schema = mongoose.Schema;

const questionSchema = new Schema(
  {
    username: { type: String, require: true },
    question: { type: String, require: true },
    q_subject: { type: String, require: true },
    q_topic: { type: String, require: true },
    q_sub_topic: { type: String },
    q_type: { type: String, require: true },
    exam_type: { type: String, require: true },
    difficulty_level: { type: String, require: true },
    scale: { type: String, require: true },
    it_faculty: { type: String, require: true },
    it_exam: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
