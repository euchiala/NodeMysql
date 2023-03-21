var mysql = require('mysql');

var cnx  = mysql.createPool({
    host            : 'localhost',
    port            : '3306',
    user            : 'root',
    password        : '',
    database        : 'esthetique'
  });
module.exports = cnx;