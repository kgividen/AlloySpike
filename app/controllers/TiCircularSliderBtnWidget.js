var args = arguments[0] || {};

$.btn.onClick(function (e) {
	Ti.API.info("onClick btn1 E: " + JSON.stringify(e));
});

$.btn2.onClick(function (e) {
	Ti.API.info("onClick btn2 E: " + JSON.stringify(e));
});

$.btn.onTouchEnd(function (e) {
	Ti.API.info("touchend E: " + JSON.stringify(e));
});

$.btn2.onTouchEnd(function (e) {
	Ti.API.info("touchend E: " + JSON.stringify(e));
});


$.win.addEventListener("open", function() {
    $.btn.setBtnValue(10); //TODO For some reason when this is set we can't drag the slider initially...we have to click then drag it so this is an issue.
    $.btn2.setBtnValue(20);
});

function close() {
	$.destroy();
	$.win.close();
}
