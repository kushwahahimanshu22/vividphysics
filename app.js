const express = require('express')
const path = require('path');
const app = express();
const dppRoutes = require('./routes/dppRoutes')
const lecRoutes = require('./routes/lecRoutes')
const chapRoutes = require('./routes/chapRoutes')
const bookRoutes = require('./routes/bookRoutes')
const viewRoutes = require('./routes/viewRoutes')
// const favicon = require('serve-favicon')

// app.use(favicon(path.join(__dirname,'public','images','favicon.png')))
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/api/v1/dpp', dppRoutes)
app.use('/api/v1/lec', lecRoutes)
app.use('/api/v1/chapters', chapRoutes)
app.use('/api/v1/book', bookRoutes)
app.use('/', viewRoutes)
app.use(function(req,res,next){
  res.status(404).render('base404')
})
module.exports = app