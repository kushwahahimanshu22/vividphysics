const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
  name: String,
  chap_code: String,
  batch: String
});

const Chapter = mongoose.model('Chapter', chapterSchema)

module.exports = Chapter;