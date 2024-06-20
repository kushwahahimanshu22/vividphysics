const express = require('express');
const lecController = require('../controllers/lecController');

const Router = express.Router();

Router.post('/', lecController.addVideo);
Router.get('/:batch/:chapter', lecController.getVideoByChapterBatch);
Router.get('/:batch/:chapter/:lecture_no/:part', lecController.getVideo);

module.exports = Router;