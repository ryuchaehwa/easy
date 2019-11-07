var express = require('express')
var router = express.Router();
var mysql = require('mysql')

var db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '111111',
    database: 'book'
})

db.connect((err) => {
    if (err) {
        console.log(err)
        throw err;
    }
    console.log('*********** DB CONNECTED ***********')
})

router.get('/', function (req, res, next) {

    // let month = '2019-11'
    let month = req.body.params.month;
    console.log(month)
    let sql = `SELECT * FROM books WHERE reg_date LIKE '${month}%'`

    db.query(sql, month, (err, results) => {
        if (err) {
            console.log(err)
            throw err;
        }
        console.log(results)
        res.send(results)
    })
})


module.exports = router