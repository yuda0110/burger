const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'burgers_db'
})

connection.connect((err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Connection ID: ${connection.threadId}`);
})

module.exports = connection;