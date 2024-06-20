const mongoose = require('mongoose');

const lecSchema = new mongoose.Schema({
  batch: String,
  chapter: String,
  lecture_no : Number,
  iframe: String,
  part: Number,
  youtubeLink: String
});

const Lecture = mongoose.model('Lecture', lecSchema);

module.exports = Lecture;