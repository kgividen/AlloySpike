var args = arguments[0] || {};

var TiCircularSlider = require('de.marcelpociot.circularslider');

var sliderView = TiCircularSlider.createView({
	height: 200,
    width: 200,
    lineWidth: 20,
    filledColor: 'blue',
    unfilledColor: 'gray',
    // maximumValue: "50.0f"
});
sliderView.val=50;
sliderView.value=50;
sliderView.text=50;
sliderView.title=50;
sliderView.setVal(50);
sliderView.setValue(50);
sliderView.addEventListener('change',function(e){
    // Ti.API.info( "Value is: ", e.value );
    $.currentVal.setText(Math.round(e.value));
});

sliderView.addEventListener('stop',function(e){
    alert( "blah slider");
});

sliderView.addEventListener('click',function(e){
    alert( "blah slider");
});

// $.blahView.addEventListener('click',function(e){
    // alert("blahView");
// });

// $.blahView.addEventListener('touchend',function(e){
    // alert("blahView touchend");
// });

$.container.add(sliderView);
