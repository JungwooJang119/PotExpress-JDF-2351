const express = require("express");
const res = require("express/lib/response");
const { json } = require("express/lib/response");
const bcrypt = require("bcryptjs")// for hashing passwords
const costFactor = 10; // used for the alt
let authenticated = false; // used to see if user is logged in

// let's make a connection to our mysql server
const mysql = require("mysql2")

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "potexpress"
})//create database in mysql prior

conn.connect(function(err){
    if(err){
        console.log("Error:", err);
    }else{
        console.log("Connection established.")
    }
})

// app will be our express instance
const app = express();
username="jung"
password="1234"

// Serve static files from the public dir
// if you do not include this, then navigation to the localhost will not show anything
app.use(express.static("public")); // will use the index.html file

// the following is a route
// serve home page
// note that our callback function is anonymous here
app.get("/", function(req, res){
    res.json("hello this is the backend");
})


// recall that the login information was passed as a parameter in xhr.send() as a POST request
// the middleware function express.urlencoded must be used for POST requests
// the data will be in the req.body object
app.use(express.urlencoded({extended:false}));

app.post("/page1", function(req, res)) {
    ordersQuery = "insert into orders values(?, ?, ?)"
    conn.query(ordersQuery, [req.body.name, req.body.address, req.body.strain], function(err, rows){
        if (err) {
            console.log("Error in inserting")
        } else {
            console.log("Success")
        }
    });
}

// post to route "attempt login"
app.post("/attempt_login", function(req, res){
    // we check for the username and password to match.
    conn.query("select password from registeredusers where username = ?", [req.body.username], function (err, rows){
        if(err){
            res.json({success: false, message: "user doesn't exists"});
        }else{
            storedPassword = rows[0].password // rows is an array of objects e.g.: [ { password: '12345' } ]
            // bcrypt.compareSync let's us compare the plaintext password to the hashed password we stored in our database
            if (bcrypt.compareSync(req.body.password, storedPassword)){
                authenticated = true;
                res.json({success: true, message: "logged in"})
            }else{
                res.json({success: false, message:"password is incorrect"})
            }
        }
    })  
})

// Start the web server
// 3000 is the port #
// followed by a callback function
app.listen(3000, function() {
   console.log("Listening on port 3000...");
});