var args = arguments[0] || {};

var TiCircularSlider = require('de.marcelpociot.circularslider');

var sliderView = TiCircularSlider.createView({
	top:50,
	height: 100,
    width: 100,
    lineWidth: 10,
    filledColor: 'blue',
    unfilledColor: 'gray',
    // maximumValue: "50.0f"
});

sliderView.addEventListener('change',function(e){
    $.currentVal.setText(Math.round(e.value));
});

$.button.addEventListener('click',function(e){
    $.button.setBackgroundImage("/images/btn-on.png");
});

sliderView.addEventListener('touchend',function(e){
	Ti.API.info("Value is: " + e.value);
	if(e.value > 0){
    	$.button.setBackgroundImage("/images/btn-on.png");
	} else {
    	$.button.setBackgroundImage("/images/btn-off.png");
    }
});

sliderView.add($.button);
$.container.add(sliderView);

$.win.addEventListener("open", function() {
    sliderView.setValue(0);
});