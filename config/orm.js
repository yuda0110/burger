const connection = require('./connection.js');

const orm = {
  selectAll: (table, where, cb) => {
    connection.query('SELECT * FROM ?? WHERE ?', [table, where], (err, res) => {
      if (err) {
        return res.status(500).end();
      }
      cb(res);
    })
  },

  insertOne: (table, cols, val, cb) => {
    connection.query('INSERT INTO ?? (??) VALUES ?', [table, cols, val], (err, res) => {
      if (err) {
        return res.status(500).end();
      }
      cb(res);
    })
  },

  updateOne: (table, set, where, cb) => {
    connection.query('UPDATE ?? SET ? WHERE ?', [table, set, where], (err, res) => {
      if (err) {
        return res.status(500).end();
      }
      cb(res);
    })
  }
};

module.exports = orm;