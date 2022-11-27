const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "danny-george43!",
    database: "crud_database"
});


app.get("/", (req, res) => {
    const sql_insert = "INSERT INTO movie_reviews (movie_name, movie_review) VALUES ('inception', 'good stuff');";
    db.query(sql_insert, (err, result) => {
        res.send('hello my man pedro');
    });
});

app.listen(3001, () => {
    console.log('running on 3001');
});