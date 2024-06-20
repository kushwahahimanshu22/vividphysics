const Dpp = require('../models/dppModel');

exports.getVideo = async (req, res, next) => {
  try{
    const details = {
      chapter: req.params.chapter,
      batch: req.params.batch,
      dppno: req.params.dppno,
    }
    const lec = await Dpp.findOne(details);
    if(!lec){
      return res.status(404).json({status:'failed', message: 'video not found'})
    }
    res.status(200).json({
      status:'success',
      lec
    });
  }
  catch(err){
    console.log(err)
    res.status(500).json({
      status:'failed',
    })
  }
}
exports.addVideo = async (req, res, next) => {
  // console.log(req.body);
  try{
    const details = {
      chapter: req.body.chapter,
      batch: req.body.batch,
      dppno: req.body.dppno,
      iframe: req.body.iframe,
      youtubeLink: req.body.youtubeLink,
    }
    const lec = await Dpp.create(details);
    res.status(200).json({
      status:'success',
      lec
    })
  }
  catch(err){
    console.log(err)
    res.status(500).json({
      status:'failed',
    })
  }
}