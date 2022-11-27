const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require('body-parser')
const cors = require('cors');


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "potexpress"
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))

app.get("/api/get", (req,res) => {
    const sqlSelect = "SELECT * FROM orders";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
});

app.post("/api/insert", (req,res) => {
    const orderName = req.body.inputName;
    const orderAddress = req.body.inputAddress;
    const sqlInsert = "INSERT INTO orders (name, address) VALUES (?,?)"
    db.query(sqlInsert, [orderName, orderAddress], (err, res) => {
        //console.log(res);
    })
})

app.put("/api/update", (req,res) => {
    const orderStrain = req.body.inputStrain;
    const orderName = req.body.inputName;
    const sqlUpdate = "UPDATE orders SET strain = ? WHERE name = ?";
    db.query(sqlUpdate, [orderStrain, orderName], (err, result) =>{
        if(err) {
            console.log(err)
        }
    })
})

app.listen(3001, () => {
    console.log("Server specifically running on port 3001, while client is on 3000")
})