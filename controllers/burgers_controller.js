const express = require('express');
const burger = require('../models/burger');
const router = express.Router();


router.get('/', (req, res) => {
  burger.all((data) => {
    console.log(data);
    res.render('index', { burgers: data });
  });
});

router.post('/', (req, res) => {
  console.log('req.body.name: ' + req.body.name);
  burger.create(req.body.name, (result) => {
    // Send back the ID of the new quote
    console.log('result.insertId' + result.insertId);
    res.json({ id: result.insertId });
  });
});

module.exports = router;