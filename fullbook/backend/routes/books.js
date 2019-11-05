var express = require('express')
var router = express.Router();
var books = require('../books.json')

var mysql = require('mysql')

// router.get('/', function(req, res, next) {
//     console.log(books)
//     res.send(books)
// })

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '111111',
    database: 'book'
})

connection.connect(function (err) {
    if (err) {
        console.log('mysql connection error');
        console.log(err);
        throw err;
    }
})

router.get('/', function (req, res) {
    connection.query('SELECT * FROM books', function (err, rows) {
        if (err) throw err;
        res.send(rows);
    })
})

// router.post('/addbook', function (req, res) {
//     const book = {
//         'user_name': req.body.book.user_name,
//         "book_title": req.body.book.book_title,
//         "book_url": req.body.book.book_url
//     };
//     connection.query
//         ('insert into books(user_name, book_title, book_url) values("' + book.user_name + '", "' + book.book_title + '", "' + book.book_url + '")', book,
//             function (err, row2) {
//                 if (err) throw err;
//             })
//     res.json({
//         success: true,
//         message: 'Do it properly'
//     })
// }
// )

router.post('/addbook', function (req, res) {
    var book = {
        "user_name": req.body.book.user_name,
        "book_title": req.body.book.book_title,
        "book_url": req.body.book.book_url
    };
    console.log(book)
    connection.query('insert into users set ?', book, function (err, result) {
        if (err) {
            console.error(err);
            throw err;
        }
        console.log(result)
        res.status(200).send('success');
    })
})


router.get('/:user_name', function (req, res, next) {
    var userName = parseInt(req.params.user_name)
    var book = books.filter(function (book) {
        return book.user_name === userName
    });
    res.send(book)
});

module.exports = router;