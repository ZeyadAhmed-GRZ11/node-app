const mysql = require("mysql2");
const query = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "shop2",
  port:3307
});
module.exports = query;
