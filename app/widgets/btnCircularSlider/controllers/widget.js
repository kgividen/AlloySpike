var args = arguments[0] || {};
Ti.API.info("args: " + JSON.stringify(args));

var TiCircularSlider = require('de.marcelpociot.circularslider');

var lw = _.has(args, 'height') ? args.height*.08 : 5;

$.container.top = args.top || 10;

var sliderView = TiCircularSlider.createView({
    height: args.height || 100,
    width: args.width || 100,
    lineWidth: lw,
    filledColor: args.filledColor || "blue",
    unfilledColor: args.unfilledColor || "gray"
});


sliderView.addEventListener('change',function(e){
    $.currentValLbl.setText(Math.round(e.value));
});

sliderView.addEventListener('touchend',function(e){
	var val = Math.round(e.value);
	if(val == undefined || isNaN(val)) {
		return;
	}
	(val>0) ? turnBtnOn() : turnBtnOff();
    touchEnd(val);
});

//calculate the inside of the button
var w = _.has(args, 'width') ? args.width-(args.width * .35) : 70;
var h = _.has(args, 'height') ? args.height-(args.height * .35) : 70;
Ti.API.info("w: " + w + " h: " + h);
var b = _.has(args, 'width') ? w/2: 35;

//Make the button half moon shaped
$.button.setWidth(w);
$.button.setHeight(h);
$.button.setBorderRadius(b),
$.button.setBackgroundGradient({
	colors: [
        {
            color:  args.btnBackgroundColor || 'white',
            offset: 0.50
        }, {
            color: args.btnOffColor || 'gray',
            offset: 0.50
        }
	]		
});

//Add some labels to go on the button to show the percent of the slider and the name
$.currentValLbl.setFont({
	fontSize: _.has(args, 'fontSize') ? args.fontSize : w*.4	
});
	
$.btnName.setText(args.name || "");
$.btnName.setFont({
	fontSize: _.has(args, 'fontSize') ? args.fontSize : w*.2	
});

//Toggle the button on/off when clicked
$.button.addEventListener('click',function(e){
	var val = $.currentValLbl.text;
	if(val > 0) {
		$.currentValLbl.setText("0");
		sliderView.setValue(0);
		turnBtnOff();
		buttonClicked("off");
	} else {
		$.currentValLbl.setText("100");
		sliderView.setValue(100);
		turnBtnOn();
		buttonClicked("on");
	}
	
});

//Add the button into the middle of the sliderView	
$.container.add($.button);
$.container.add(sliderView);

//internal functions
function turnBtnOn() {
	$.button.setBackgroundGradient({
	 	colors: [
            {
                color: args.btnBackgroundColor || 'white',
                offset: 0.50
            }, {
                color:  args.btnOnColor || 'red',
                offset: 0.50
            }
        ]	
	});	
}

function turnBtnOff () {
	$.button.setBackgroundGradient({
	 	colors: [
            {
                color:  args.btnBackgroundColor || 'white',
                offset: 0.50
            }, {
                color: args.btnOffColor || 'gray',
                offset: 0.50
            }
        ]	
	});	
}

	
//Callbacks
var onClickCallback, onTouchEndCallback;

// The button has been clicked, call callback
function buttonClicked(e) {
	if(typeof(onClickCallback) === 'function') {
		onClickCallback(e);
	}
}

// Assign our callback
function onClick(callback) {
	onClickCallback = callback;
}


//The slider has been touched, call callback
function touchEnd(e) {
	if(typeof(onTouchEndCallback) === 'function') {
		onTouchEndCallback(e);
	}
}
function onTouchEnd(callback) {
	onTouchEndCallback = callback;
}

function setBtnValue(e) {
	sliderView.setValue(e);
	turnBtnOn();
}
// sliderView.onClick = function(callback) {
	// onClickCallback = callback;
// };

// sliderView.onTouchEnd = function(callback) {
	// onTouchEndCallback = callback;
// };

// sliderView.setBtnValue = function (e) {
	// sliderView.setValue(e);
	// turnBtnOn();
// };

//Exports
exports.onClick = onClick;
exports.onTouchEnd = onTouchEnd;
exports.setBtnValue = setBtnValue;