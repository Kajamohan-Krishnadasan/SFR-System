const mysql = require("mysql");

const localhost = "localhost";
const user = "root";
const password = "";
const db_name = "sfrs_db";

const db = mysql.createConnection({
  host: localhost,
  user: user,
  password: password,
  database: db_name,
});

module.exports = db;
