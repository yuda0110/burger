const connection = require('./connection.js');

const orm = {
  selectAll: (table) => {
    connection.query('SELECT * FROM ??', [table], (err, res) => {
      if (err) {
        return res.status(500).end();
      }
      console.log(res);
    })
  },

  insertOne: (table, cols, val) => {
    connection.query('INSERT INTO ?? (??) VALUES ?', [table, cols, val], (err, res) => {
      if (err) {
        return res.status(500).end();
      }
      console.log(res);
    })
  },

  updateOne: (table, set, where) => {
    connection.query('UPDATE ?? SET ? WHERE ?', [table, set, where], (err, res) => {
      if (err) {
        return res.status(500).end();
      }
      console.log(res);
    })
  }
};

module.exports = orm;
