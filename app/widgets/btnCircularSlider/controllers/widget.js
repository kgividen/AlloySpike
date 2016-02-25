var args = arguments[0] || {};

var TiCircularSlider = require('de.marcelpociot.circularslider');

var lw = _.has(args, 'height') ? args.height*.05 : 5;

Ti.API.info("args: " + JSON.stringify(args));
var sliderView = TiCircularSlider.createView({
	top:_.has(args, 'top') ? args.top : 10,
	height: _.has(args, 'height') ? args.height : 100,
    width: _.has(args, 'width') ? args.width : 100,
    lineWidth: lw,
    filledColor: _.has(args, 'filledColor') ? args.filledColor : "blue",
    unfilledColor: _.has(args, 'unfilledColor') ? args.unfilledColor : "gray",
    // maximumValue: "50.0f"
});


sliderView.addEventListener('change',function(e){
    // $.currentVal.setText(Math.round(e.value));
    Ti.API.info("e.value in sliderView event listener: " + e.value);
});
$.container.add(sliderView);


// var w = _.has(args, 'width') ? args.width-(args.width * .3) : 70;
// var h = _.has(args, 'height') ? args.height-(args.height * .3) : 70;
// var b = _.has(args, 'width') ? w/2: 35;
// 
// Ti.API.info("w: " + w);
// Ti.API.info("h: " + h);
// Ti.API.info("b: " + b);
// 
// $.button.setWidth(w);
// $.button.setHeight(h);
// $.button.setBorderRadius(b);
// $.button.setBackgroundGradient({
 	// colors: [
        // {
            // color:  _.has(args, 'btnBackgroundColor') ? args.btnBackgroundColor: 'white',
            // offset: 0.50
        // }, {
            // color: _.has(args, 'btnOnColor') ? args.btnOffColor: 'gray',
            // offset: 0.50
        // }
    // ]	
// });	
// 
// $.button.addEventListener('click',function(e){
	// var val = $.currentVal.text; 
	// if (val == undefined) {
		// return;
	// }
	// if(val > 0) {
		// turnBtnOff();
		// buttonClicked("off");
	// } else {
		// // turnBtnOn(100);
		// buttonClicked("on");
	// }
// 	
// });

// sliderView.addEventListener('touchend',function(e){
	// var val = Math.round(e.value);
	// if(!e.value) {
		// return;
	// }
	// if( val > 0){
    	// turnBtnOn(val);
	// } else {
    	// turnBtnOff();
    // }
    // touchEnd(val);
// });

// sliderView.add($.button);

// exports.setValue = function(v) {
	// if(v > 0) {
		// // turnBtnOn(v);
	// }
// };

// This will hold our callback
// var onClickCallback, onTouchEnd;
// 
// // The button has been clicked, call callback
// function buttonClicked(e) {
	// if(typeof(onClickCallback) === 'function') {
		// onClickCallback(e);
	// }
// }
// 
// //The slider has been touched, call callback
// function touchEnd(e) {
	// if(typeof(onTouchEndCallback) === 'function') {
		// onTouchEndCallback(e);
	// }
// }

// Assign our callback
// exports.onClick = function(callback) {
	// onClickCallback = callback;
// };
// 
// exports.onTouchEnd = function(callback) {
	// onTouchEndCallback = callback;
// };

//internal functions
// function turnBtnOn (val) {
	// sliderView.setValue(val);	
	// $.currentVal.setText(val);
	// $.button.setBackgroundGradient({
	 	// colors: [
            // {
                // color: _.has(args, 'btnBackgroundColor') ? args.btnBackgroundColor: 'white',
                // offset: 0.50
            // }, {
                // color:  _.has(args, 'btnOnColor') ? args.btnOnColor: 'red',
                // offset: 0.50
            // }
        // ]	
	// });	
// }
// 
// 
// function turnBtnOff () {
	// sliderView.setValue(0);	
	// $.currentVal.setText("0");
	// $.button.setBackgroundGradient({
	 	// colors: [
            // {
                // color:  _.has(args, 'btnBackgroundColor') ? args.btnBackgroundColor: 'white',
                // offset: 0.50
            // }, {
                // color: _.has(args, 'btnOnColor') ? args.btnOffColor: 'gray',
                // offset: 0.50
            // }
        // ]	
	// });	
// }
