var express = require('express')
var router = express.Router()

var mysql = require('mysql')
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '111111',
    database: 'book'
})

db.connect((err) => {
    if (err) {
        console.log(err)
        throw err
    }
    console.log('MySql is connected ....... ')
})

// 도서신청 리스트
router.get('/', function (req, res, next) {
    let month = '2019-11'
    let sql = `SELECT * FROM books WHERE reg_date LIKE '${month}%'`
    db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(err)
        console.log(results)
        res.send(results)
    })
})

// 책 제목 수정
router.post('/editbook', function (req, res) {

    console.log(55555)

    let bookNo = req.body.book_no
    let bookTitle = req.body.book_title

    let editBook = {
        'book_no': bookNo,
        'book_title': bookTitle
    }
    console.log(editBook)

    let sql = `UPDATE books SET book_title = '${bookTitle}' where book_no = ${bookNo}`
    db.query(sql, editBook, function (err, result) {
        if (err) throw err;
        console.log(err)
        console.log(result)
    })
})

// 새 책 등록
router.post('/addbook', function (req, res) {
    console.log(123123123)
    const newBook = {
        'user_name': req.body.book.user_name,
        'book_title': req.body.book.book_title,
        'book_url': req.body.book.book_url
    }
    console.log(newBook)
    console.log(3333)
    let sql = 'INSERT INTO books SET ?'
    db.query(sql, newBook, function (err, result) {
        if (err) throw err;
        console.log(result)
    })
    console.log(444)
})


router.get('/:user_id', function (req, res, next) {
    res.send('hahahahah')
})


module.exports = router;