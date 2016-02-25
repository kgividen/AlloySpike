var args = arguments[0] || {};

var btn1 = require("/TiCircularSliderBtn").init({
	top:'20',
	name:'Blah',
	width: 100,
	height: 100,
	filledColor:'#31B3E7',
	unfilledColor: 'gray',
	btnOnColor: '#31B3E7'
});

var btn2 = require("/TiCircularSliderBtn").init({
	name: 'Button2',
	top:'150',
	width: 50,
	height: 50
});

btn1.onClick(function (e) {
	Ti.API.info("onClick btn1 E: " + JSON.stringify(e));
});

btn2.onClick(function (e) {
	Ti.API.info("onClick btn2 E: " + JSON.stringify(e));
});

btn1.onTouchEnd(function (e) {
	Ti.API.info("touchend E: " + JSON.stringify(e));
});

btn2.onTouchEnd(function (e) {
	Ti.API.info("touchend E: " + JSON.stringify(e));
});


$.win.addEventListener("open", function() {
    btn1.setBtnValue(10);
    btn2.setBtnValue(20);
});


$.win.add(btn1);
$.win.add(btn2);