require("dotenv").config();
require("./allsql");

var mysql = require("mysql");

var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
});

async function updatelocation() {
  new Promise((resolve, reject) => {
    con.connect(function (err) {
      if (err) throw err;
      console.log("Connected!");
    });
  });
}
