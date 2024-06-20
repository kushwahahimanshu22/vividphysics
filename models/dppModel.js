const mongoose = require('mongoose');

const dppSchema = new mongoose.Schema({
  chapter: String,
  batch: String,
  dppno: Number,
  iframe: String,
  youtubeLink: String
});

const Dpp = mongoose.model('Dpp', dppSchema);

module.exports = Dpp;