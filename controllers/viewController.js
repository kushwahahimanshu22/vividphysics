const Lec = require("../models/lectureModel");
const Chapter = require("../models/chapterModel");
const Dpp = require("../models/dppModel");
const Book = require("../models/bookModel");
const BookChapter = require("../models/bookChapterModel");

exports.getPage = (req, res, next) => {
  // console.log(req.url);
  res.render("baseVideo", { url: req.url });
};

exports.homePage = async (req, res, next) => {
  const lecs = await Lec.find();
  const chapters = await Chapter.find();
  // console.log(
  //   lecs[0].youtubeLink.replace("www", "img").replace("watch?v=", "vi/") +
  //     "/hqdefault.jpg"
  // );
  res.render("baseHome", { lecs, chapters });
};

exports.getVideoCase = async (req, res, next) => {
  try {
    const details = {
      chapter: req.params.chapter,
      batch: req.params.batch,
    };
    const videos = await Lec.find(details);
    const chapterName = await Chapter.find({chap_code: details.chapter});
    if (!videos) {
      return res.status(404).render("base404");
    }
    res.status(200).render("videoCase", { videos, chapterName });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "failed",
    });
  }
};
exports.getDPPVideoCase = async (req, res, next) => {
  try {
    const details = {
      // chapter : req.params.chapter,
      batch: req.params.batch,
    };
    const videos = await Dpp.find(details);
    videos.sort((a,b) => a.dppno - b.dppno);
    const chapters = await Chapter.find();
    if (videos.length == 0) {
      return res.status(404).render("base404");
    }
    // console.log(videos.length)
    res.status(200).render("baseDpps", { videos, chapters });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "failed",
    });
  }
};

exports.getBookPage = async (req, res, next) => {
  try {
    const chapters = await BookChapter.find({ book: req.params.bookName });
    if (chapters.length == 0) {
      return res.status(404).render("base404");
    }
    const videos = await Book.find();
    res
      .status(200)
      .render("baseBook", { bookName: req.params.bookName, chapters, videos });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "failed",
    });
  }
};

exports.bookVideo = async (req, res, next) => {
  try {
    res.status(200).render("baseVideo", { url: req.url });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "failed",
    });
  }
};

exports.getBookVideoCase = async (req, res, next) => {
  try {
    const chapters = [
      {title:"Objective 1", type:"ob1"},
      {title:"Objective 2", type:"ob2"},
      {title:"Exercise", type:"ex"},
    ]
    const details = {
      chapter: req.params.chapter,
      book: req.params.bookName
    }
    const videos = await Book.find(details);
    videos.sort((a,b) => a.questionNo - b.questionNo)
    if(videos.length == 0){
      // console.log(videos)
      return res.status(404).render("base404");
    }
    res.status(200).render("bookVideoCase", {chapterName: videos[0].chapterName, chapters, videos})
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "failed",
    });
  }
};

exports.about = (req,res,next) => {
  res.status(200).render('about');
}