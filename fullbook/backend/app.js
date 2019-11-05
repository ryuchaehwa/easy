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
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '111111',
  database: 'book'
})

db.connect((err) => {
  if(err) {
    console.log(err);
    throw err;
  }
  console.log('mysql connected .......')
})

// booksRouter.get('/', (req, res) => {
//   let sql = 'SELECT * FROM books'
//   let query = db.query(sql, (err, results) => {
//     if(err) throw err;
//     console.log(results)
//     console.log('GETTING DATA IS DONE!!')
//     res.send(query)
//   })
// })



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
