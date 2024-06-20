const Chapter = require('../models/chapterModel')

exports.addChapter = async (req,res,next)=>{
  try{
    const details = {
      name : req.body.name,
      chap_code : req.body.chap_code,
      batch : req.body.batch,
    }
    const chapter = await Chapter.create(details);
    res.status(200).json({
      status: 'success',
      chapter
    })
  }catch(err){
    console.log(err);
    res.status(500).json({
      status:"Failed",
    })
  }
}
exports.getChapter = async (req,res,next)=>{
  try{
    const chapters = await Chapter.find();
    res.status(200).json({
      status: 'success',
      chapters
    })
  }catch(err){
    console.log(err);
    res.status(500).json({
      status:"Failed",
    })
  }
}