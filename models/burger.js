const orm = require('../config/orm');

const burger = {
  all: (where, cb) => {
    orm.selectAll('burgers', where, (res) => {
      cb(res);
    })
  },

  create: (val, cb) => {
    orm.insertOne('burgers', 'burger_name', val, (res) => {
      cb(res);
    })
  },

  update: (set, where, cb) => {
    orm.updateOne('burgers', set, where, cb, (res) => {
      cb(res);
    })
  }
};

module.exports = burger;