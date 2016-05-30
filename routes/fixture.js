var express = require('express');
var router = express.Router();
var dateUtil = require('./../utils/dateUtil');
var fixturesModel = require('./../models/fixturesBeautify');

/* GET home page. */
router.get('/lich-thi-dau-euro-2016', function(req, res, next) {	
	for(var i=0; i < fixturesModel.count; i++){
		fixturesModel.fixtures[i].date = dateUtil.toScheduleFormat(new Date(fixturesModel.fixtures[i].date));
	}
  	res.render('index', { title: 'Lịch thi đấu EURO 2016' , data : fixturesModel});
});

module.exports = router;
