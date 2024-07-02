const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({path:'./config.env'});
const DB = process.env.MONGODB_URI.replace('<PASSWORD>', process.env.DATABASE_PASS)
// console.log(DB);
// console.log(DB)
mongoose
  .connect(DB)
  .then(() => {
    console.log('DB connection made');
  });

const port = process.env.PORT || 3000
const server = app.listen(port, ()=>{
  console.log(`App running on port ${port}`)
});

module.exports = app;