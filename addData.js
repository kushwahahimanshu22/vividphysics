const fs = require("fs");
const Book = require("./models/bookModel");
const BookChapter = require("./models/bookChapterModel");
const Dpp = require("./models/dppModel");
const Chapter = require("./models/chapterModel");
const Lecture = require("./models/lectureModel");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASS
);
// console.log(DB)
mongoose.connect(DB).then(() => {
  console.log("DB connection made");
});

// const dataLecture = fs.readFileSync("Lecture.json", "utf-8");
// const dataDpp = fs.readFileSync("DPP.json", "utf-8");
const dataBook = fs.readFileSync("BookSol.json", "utf-8");
// const dataBookChap = fs.readFileSync("BookChapter.json", "utf-8");
// const dataChapter = fs.readFileSync("Chapter.json", "utf-8");

// JSON.parse(dataLecture).forEach(async (e) => {
//   await Lecture.create(e);
// });

// JSON.parse(dataDpp).forEach(async (e) => {
//   await Dpp.create(e);
// });

JSON.parse(dataBook).forEach(async (e) => {
  await Book.create(e);
});

// JSON.parse(dataBookChap).forEach(async (e) => {
//   await BookChapter.create(e);
// });

// JSON.parse(dataChapter).forEach(async (e) => {
//   await Chapter.create(e);
// });

console.log('done');
