const Book = require('../models/bookModel')
const BookChapter = require('../models/bookChapterModel')

exports.addBook = async (req,res,next) => {
  const details = {
    book: req.body.book,
    chapterName: req.body.chapterName,
    chapter: req.body.chapter,
    questionType: req.body.questionType,
    questionNo: req.body.questionNo,
    iframe: req.body.iframe,
    youtubeLink: req.body.youtubeLink
  };
  try{
    const book = await Book.create(details);
    if(!book){
      return res.status(500).json({
        status:"failed",
        message:"Error while inserting in DB"
      });
    }
    res.status(200).json({
      status:"success",
      book
    });
  }
  catch(err){
    console.log(err)
    return res.status(500).json({
      status:"failed",
      message:"Error while inserting in DB"
    });
  }
}
exports.addBookChapter = async (req,res,next) => {
  const details = {
    book: req.body.book,
    chapter: req.body.chapter,
    chapterName: req.body.chapterName,
  };
  try{
    const bookChapter = await BookChapter.create(details);
    if(!bookChapter){
      return res.status(500).json({
        status:"failed",
        message:"Error while inserting in DB"
      });
    }
    res.status(200).json({
      status:"success",
      bookChapter
    });
  }
  catch(err){
    console.log(err)
    return res.status(500).json({
      status:"failed",
      message:"Error while inserting in DB"
    });
  }
}

exports.getBooks = async (req,res,next) => {
  try{
    const book = await Book.find();
    res.status(200).json({
      status:"success",
      book
    });
  }
  catch(err){
    console.log(err)
    return res.status(500).json({
      status:"failed",
    });
  }
}
exports.getOneBook = async (req,res,next) => {
  const details = {
    book: req.params.book,
    chapter: req.params.chapter,
    questionType: req.params.questionType,
    questionNo: req.params.questionNo,
  }
  try{
    const lec = await Book.findOne(details);
    if(!lec){
      return res.status(404).json({
        status:"failed",
      });
    }
    res.status(200).json({
      status:"success",
      lec
    });
  }
  catch(err){
    console.log(err)
    return res.status(500).json({
      status:"failed",
    });
  }
}
exports.getOneBookChapter = async (req,res,next) => {
  const details = {
    book: req.params.book,
    chapter: req.params.chapter,
  }
  try{
    const bookChapter = await BookChapter.findOne(details);
    if(!bookChapter){
      return res.status(404).json({
        status:"failed",
      });
    }
    res.status(200).json({
      status:"success",
      bookChapter
    });
  }
  catch(err){
    console.log(err)
    return res.status(500).json({
      status:"failed",
    });
  }
}
exports.getBookChapters = async (req,res,next) => {
  try{
    const bookChapter = await BookChapter.find();
    res.status(200).json({
      status:"success",
      bookChapter
    });
  }
  catch(err){
    console.log(err)
    return res.status(500).json({
      status:"failed",
    });
  }
}