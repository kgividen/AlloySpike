var args = arguments[0] || {};

var TiCircularSlider = require('de.marcelpociot.circularslider');

var sliderView = TiCircularSlider.createView({
	top:10,
	height: 100,
    width: 100,
    lineWidth: 10,
    filledColor: 'blue',
    unfilledColor: 'gray',
    // maximumValue: "50.0f"
});

var sliderView2 = TiCircularSlider.createView({
	top:200,
	height: 50,
    width: 50,
    lineWidth: 5,
    filledColor: 'blue',
    unfilledColor: 'gray',
    // maximumValue: "50.0f"
});

$.win.addEventListener('open',function(e){
	Ti.API.info("setting to 80!!!!");
	sliderView.setValue(80); 
});


function setTo40 () {
	sliderView.setProgress(40);	
}

sliderView.addEventListener('change',function(e){
    $.currentVal.setText(Math.round(e.value));
});

sliderView2.addEventListener('change',function(e){
    $.currentVal2.setText(Math.round(e.value));
});

sliderView.addEventListener('touchend',function(e){
    alert( "slider1 touchend");
    Ti.API.info( "e is: ", Ti.API.info(e));
    Ti.API.info( "Value is: ", e.value );
});

sliderView2.addEventListener('touchend',function(e){
    alert( "slider2 touchend");
    Ti.API.info( "Value is: ", e.value );
});

sliderView.addEventListener('click',function(e){
    alert( "slider1 click");
});

sliderView.add($.currentVal);
sliderView2.add($.currentVal2);

$.container.add(sliderView);
$.container.add(sliderView2);
