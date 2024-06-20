const Lecture = require('../models/lectureModel');

exports.addVideo = async (req,res,next) => {
  try{
    const details = {
      batch: req.body.batch,
      chapter: req.body.chapter,
      lecture_no: req.body.lecture_no,
      iframe: req.body.iframe,
      part: req.body.part || 1,
      youtubeLink: req.body.youtubeLink,
    };
    const lec = await Lecture.create(details);
    res.status(200).json({
      status:"success",
      lec
    });
  }
  catch(err){
    console.log(err);
    res.status(500).json({
      status:'failed',
    })
  }
}
exports.getVideo = async (req,res,next) => {
  try{
    const details = {
      batch: req.params.batch,
      chapter: req.params.chapter,
      lecture_no: req.params.lecture_no,
      // lecture_iframe: req.params.lecture_iframe,
      part: req.params.part,
    };
    const lec = await Lecture.findOne(details);
    if(!lec){
      return res.stutus(404).json({
        status:'failed',
        message:'Lecture not found'
      })
    }
    res.status(200).json({
      status:"success",
      lec
    });
  }
  catch(err){
    console.log(err);
    res.status(500).json({
      status:'failed',
    })
  }
}

exports.getVideoByChapterBatch = async (req,res,next)=>{
  try{
    const details = {
      chapter : req.params.chapter,
      batch : req.params.batch,
    }
    const videos = await Lecture.find(details)
    if(!videos){
      return res.status(404).json({
        status:"failed",
        messege:'No lectures found'
      })
    }
    res.status(200).json({
      status:'success',
      videos
    })
  }
  catch(err){
    console.log(err)
    res.status(500).json({
      status:'failed',
    })
  } 
}