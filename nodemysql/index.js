const express = require('express')
const mysql = require('mysql')

// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '111111',
    database: 'nodemysql'
})

// Connect
db.connect((err) => {
    if(err) {
        console.log(err);
        throw err;
    } 
    console.log('mysql connected ....... ')
})

const app = express();
app.listen('3000', () => {
    console.log('Server started on port 3000')
});

// Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('database created ...... ')
    })
});

// Create table
app.get('/createpoststable', (req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('posts table created ...............')
    })
})

// Insert post 1
app.get('/addpost1', (req, res) => {
    let post = {
        title: 'Post 1',
        body: 'This is post number one',
    }
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 1 added ............... ')
    });
})

// Select posts
app.get('/getposts', (req, res) => {
    let sql = 'SELECT * FROM posts';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send('Posts feched ......')
    })
})

// Select posts
app.get('/getposts/:id', (req, res) => {
    let sql = `SELECT * FROM posts WHERE ID = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('ID Posts feched ......')
    })
})


// Update post
app.get('/updateposts/:id', (req, res) => {
    let newTitle = 'Updated Title'
    let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('POST UPDATED')
    })
})

// Delete post
app.get('/deleteposts/:id', (req, res) => {
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('POST DELETE')
    })
})