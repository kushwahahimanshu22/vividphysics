const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  book: String,
  chapterName: String,
  chapter: Number,
  questionType: String,
  questionNo: Number,
  iframe: String,
  youtubeLink: String
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book