var express = require('express')
var router = express.Router();
var books = require('../books.json')

router.get('/', function(req, res, next) {
    res.send(books)
})



router.get('/:userName', function(req, res, next) {
    var userName = parseInt(req.params.userName)
    var book = books.filter(function(book) {
        return book.userName === userName
    });
    res.send(book)
});

module.exports = router;