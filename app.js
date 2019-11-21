var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require("cors");
require('dotenv').config();

var app = express();
app.use(logger('dev'));
app.use(cors({
  origin: JSON.parse(process.env.client_origins)
}));

app.use(express.urlencoded({ extended: false }));
app.use('/countries', require("./routes/countries"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({'error': err.message});
});

module.exports = app;
