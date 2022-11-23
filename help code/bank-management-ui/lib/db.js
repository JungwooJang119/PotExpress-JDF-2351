const mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "bank_management",
  insecureAuth: true
});

connection.connect();

export { connection };