var express = require('express')
var router = express.Router();
// var books = require('../books.json')

// var mysql = require('mysql')

// const db = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: '111111',
//     database: 'book'
// })

// db.connect((err) => {
//     if (err) {
//         console.log(err)
//         throw err;
//     }
//     console.log('mySql Connected!!!!!')
// })

router.get('/', function (req, res) {
    let sql = 'SELECT * FROM books'
    db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results)
        console.log('DATA IS LOADED !!!!!!! ')
        res.send(results)
    })
})

module.exports = router;