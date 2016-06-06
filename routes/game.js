var express = require('express');
var router = express.Router();
var dateUtil = require('./../utils/dateUtil');
var fixturesModel = require('./../models/fixturesBeautify');

/* GET home page. */
router.get('/du-doan-co-thuong-euro-2016', function(req, res, next) {		
  	res.render('game', { title: 'Dự đoán có thưởng EURO 2016'});
});

module.exports = router;
