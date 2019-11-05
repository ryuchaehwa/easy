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
    if(err) {
        console.log(err)
        throw err
    }
    console.log('MySql is connected ....... ')
})

// 도서신청 리스트
router.get('/', function(req, res, next) {
    let month = '2019-09'
    let sql = `SELECT * FROM books WHERE reg_date LIKE '${month}%'`
    db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results)
        res.send(results)
    })
})

// 책 제목 수정
router.post('/editbook', function(req, res) {

    let editBook = {
        bookNo: req.params.book.book_no,
        bookTitle: req.params.book.book_title
    }

    let sql = `UPDATE books SET book_title = ${bookTitle} where book_no = ${bookNo}`
    db.query(sql, editBook, function(err, result) {
        if(err) throw err;
        console.log(result)
        res.send('업데이트 완료')
    })
})

// 새 책 등록
router.post('/addbook', function(req, res) {
    let newBook = {
        user_name: req.params.book.userName,
        book_title: req.params.book.bookTitle,
        book_url: req.params.book.book_url
    }

    let sql = 'INSERT INTO books SET ?'
    db.query(sql, newBOok, function(err, result) {
        if(err) throw err;
        console.log(result)
        res.send('추가완료')
    })
})

router.get('/:user_id', function(req, res, next) {
    res.send('hahahahah')
})







module.exports = router;