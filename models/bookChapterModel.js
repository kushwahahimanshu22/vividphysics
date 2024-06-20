const mongoose = require('mongoose')

const bookChapterSchema = new mongoose.Schema({
  book: String,
  chapterName: String,
  chapter: Number
})

const BookChapter = mongoose.model('BookChapter', bookChapterSchema);

module.exports = BookChapter