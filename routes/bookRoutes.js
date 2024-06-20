const express = require('express')
const bookController = require('../controllers/bookController')

const Router = express.Router()

Router.route('/bookvideos').get(bookController.getBooks).post(bookController.addBook)
Router.route('/chapters').get(bookController.getBookChapters).post(bookController.addBookChapter)
Router.route('/:book/:chapter').get(bookController.getOneBookChapter)
Router.route('/:book/:chapter/:questionType/:questionNo').get(bookController.getOneBook)

module.exports = Router;