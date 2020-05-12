const express = require('express');
const burger = require('../models/burger');
const router = express.Router();


router.get("/", (req, res) => {
  burger.all((data) => {
    console.log(data);
    res.render("index", { burgers: data });
  });
});


module.exports = router;