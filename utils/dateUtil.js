var DateUtil = module.exports;
var time = require('time')(Date);

DateUtil.nowTimeZone = function(date){
	var d = new Date(date);
	d.setTimezone("Asia/Ho_Chi_Minh");
	d = new Date(d);
    return d;
};

DateUtil.toScheduleFormat = function(date){
	date.setTimezone("Asia/Ho_Chi_Minh");
    // return twoDigits(date.getHours())+ ":" + twoDigits(date.getMinutes()) + " " + date.getFullYear() + "-" + twoDigits(1 + date.getMonth()) + "-" + twoDigits(date.getDate());	
    return twoDigits(date.getHours())+ ":" + twoDigits(date.getMinutes()) + " " + twoDigits(date.getDate()) + "/" + twoDigits(1 + date.getMonth());	
}

DateUtil.toMysqlFormat = function(date) {
	date.setTimezone("Asia/Ho_Chi_Minh");
    return date.getFullYear() + "-" + twoDigits(1 + date.getMonth()) + "-" + twoDigits(date.getDate()) + " " + twoDigits(date.getHours())+ ":" + twoDigits(date.getMinutes()) + ":" + twoDigits(date.getSeconds());
};

DateUtil.toYMD = function(date){
	return new Date(date.getFullYear() + "-" + twoDigits(1 + date.getMonth()) + "-" + twoDigits(date.getDate()));
}

DateUtil.formatYMD = function(date){	
	date.setTimezone("Asia/Ho_Chi_Minh");
	return date.getFullYear() + "-" + twoDigits(1 + date.getMonth()) + "-" + twoDigits(date.getDate());
}

function twoDigits(d) {
    if(0 <= d && d < 10) return "0" + d.toString();
    if(-10 < d && d < 0) return "-0" + (-1*d).toString();
    return d.toString();
}

DateUtil.additionDay = function(date, numberDay){
	var time = new Date(date).getTime();
	var timeAdd = time + parseInt(numberDay)*24*60*60*1000;
	return this.toMysqlFormat(new Date(timeAdd));
}