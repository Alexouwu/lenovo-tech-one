const mysql = require("mysql");
const { promisify } = require("util");
const express = require("express");
const app = express();

app.use(express.json());

const connection = mysql.createPool({
  host: "techonemx.com",
  user: "lenovo_db",
  password: "lenovoDB",
  database: "lenovo",
  port: "3306",
});

/*connection.connect((err, connection) => {
  if (err) throw err;
  console.log("Connected");
});*/

//Promesas de POOL QUERY FOR LOOKING
connection.query = promisify(connection.query);

module.exports = connection;
