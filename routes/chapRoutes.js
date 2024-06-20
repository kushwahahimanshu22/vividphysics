const express = require('express');
const chapterController = require('../controllers/chapterController');

const Router = express.Router();

Router.post('/', chapterController.addChapter);
Router.get('/', chapterController.getChapter);

module.exports = Router