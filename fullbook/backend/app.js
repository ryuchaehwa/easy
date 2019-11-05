var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// books
var booksRouter = require('./routes/books')
// books


// db
var mysql = require('mysql');
//

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// books
app.use('/api/books', booksRouter)
// books

// db
// var connection = mysql.createConnection({
//   host: 'localhost',
//   port: 3306,
//   user: 'root',
//   password: '111111',
//   database: 'book'
// })

// if (!connection) {
//   console.log('no')
// } else {
//   console.log('ok')
// }

// Connect
// connection.connect(function (err) {
//   if (err) {
//     console.error('mysql connection error');
//     console.error(err);
//     throw err;
//   }
// })

//insert
// app.post('/addbook', function (req, res) {
//   var book = {
//     'userId': req.body.userId,
//     'userName': req.body.userName,
//     'bookTitle': req.body.bookTitle,
//     'bookUrl': req.body.bookUrl
//   };
//   var query = connection.query('insert into books set ?', book, function (err, result) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//     res.status(200).send('success')
//   })
// })
// db

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;