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

connection.connect(function(err) {
    if(err) {
        console.log('mysql connection error');
        console.log(err);
        throw err;
    }
})

router.get('/', function(req, res) {
    connection.query('SELECT * FROM books', function(err, rows) {
        if(err) throw err;
        res.send(rows);
    })
})


router.get('/:userName', function(req, res, next) {
    var userName = parseInt(req.params.userName)
    var book = books.filter(function(book) {
        return book.userName === userName
    });
    res.send(book)
});

module.exports = router;