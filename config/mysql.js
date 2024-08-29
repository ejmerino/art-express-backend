const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'sales_data'
});

const promisePool = pool.promise();

module.exports = { promisePool };
