const express = require('express');
const viewController = require('../controllers/viewController');

const Router = express.Router();

// Router.post('/', lecController.addVideo);
Router.get('/', viewController.homePage);
Router.get('/about', viewController.about);
Router.get('/lec/:batch/:chapter/:lecture_no/:part', viewController.getPage);
Router.get('/dpp/:batch/:chapter/:lecture_no/', viewController.getPage);
Router.get('/lec/:batch/:chapter', viewController.getVideoCase)
Router.get('/dpp/:batch/', viewController.getDPPVideoCase)
Router.get('/book/:bookName', viewController.getBookPage);
Router.get('/book/:bookName/:chapter', viewController.getBookVideoCase);
Router.get('/book/:bookName/:chapter/:questionType/:questionNo', viewController.bookVideo);

module.exports = Router;