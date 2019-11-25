var express = require('express')
var router = express.Router()

var mysql = require('mysql')
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
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

    // console.log(req)
    let month = req.query.period
    // console.log("this is monthhhhhhh" + month)

    let sql = `SELECT * FROM books WHERE reg_date LIKE '${month}%'`
    db.query(sql, (err, results) => {
        if (err) {
            console.log(err)
            throw err
        }
        console.log(results)
        res.send(results)
    })
})

// 책 제목 수정
router.put('/', function (req, res) {

    // console.log(55555)

    let bookNo = req.body.book_no
    let bookTitle = req.body.book_title

    let editBook = {
        'book_no': bookNo,
        'book_title': bookTitle
    }
    // console.log(editBook)

    let sql = `UPDATE books SET book_title = '${bookTitle}' where book_no = ${bookNo}`
    db.query(sql, editBook, function (err, result) {
        if (err) throw err;
        console.log(err)
        console.log(result)
        res.send(result)
    })
})

// 새 책 등록
router.post('/', function (req, res) {
    const newBook = {
        'user_name': req.body.book.user_name,
        'book_title': req.body.book.book_title,
        'book_url': req.body.book.book_url
    }
    console.log(newBook)
    let sql = 'INSERT INTO books SET ?'
    db.query(sql, newBook, function (err, result) {
        if (err) throw err;
        console.log(result)
        res.send(result)
    })
})

// 선택한 책 삭제
router.delete('/', function (req, res) {
    // console.log(123)
    // console.log(req.body)
    let bookNo = req.body.book_no
    // console.log("Book No = " + bookNo)

    let sql = `DELETE FROM books WHERE book_no = ${bookNo}`
    console.log(6666)

    db.query(sql, bookNo, function (err, result) {
        if (err) throw err;
        console.log(err)
        console.log(result)
        console.log(3234234)
        res.send(result)
    })
})


router.get('/', function (req, res, next) {
    console.log(req)
    // console.log(575757575757575757575757575757)
    // res.send('hahahahah')

    let period = req.params.params.period
    // console.log(period)

    let sql = `SELECT *  FROM books WHERE reg_date LIKE '${period}'`
    db.query(sql, function (err, results) {
        if (err) {
            console.log(err);
            throw err
        }

        console.log(result)
        res.send(result)
    })
})


module.exports = router;