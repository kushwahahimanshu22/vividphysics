const express = require('express');
const dppController = require('../controllers/dppController');

const Router = express.Router();

Router.post('/', dppController.addVideo);
Router.route('/:batch/:chapter/:dppno').get(dppController.getVideo);

module.exports = Router