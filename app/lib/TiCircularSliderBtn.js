exports.init = function () {
	var args = arguments[0] || {};

	var TiCircularSlider = require('de.marcelpociot.circularslider');
	
	var lw = _.has(args, 'height') ? args.height*.05 : 5;
	
	//Setup the slider view with the correct sizes
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
	    currentValLbl.setText(Math.round(e.value));
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
	var w = _.has(args, 'width') ? args.width-(args.width * .2) : 70;
	var h = _.has(args, 'height') ? args.height-(args.height * .2) : 70;
	var b = _.has(args, 'width') ? w/2: 35;
	
	//Make the button half moon shaped
	var button = Ti.UI.createView({
		width: w,
		height: h,
		borderRadius:b,
		backgroundGradient: {
			colors: [
		        {
		            color:  _.has(args, 'btnBackgroundColor') ? args.btnBackgroundColor: 'white',
		            offset: 0.50
		        }, {
		            color: _.has(args, 'btnOffColor') ? args.btnOffColor: 'gray',
		            offset: 0.50
		        }
	    	]		
		}
	});
	
	//Add some labels to go on the button to show the percent of the slider and the name
	var currentValLbl = Ti.UI.createLabel({
		zIndex:10,
		top:'2%',
		font : {
			fontSize: _.has(args, 'fontSize') ? args.fontSize : w*.4	
		}
	});
	var btnName = Ti.UI.createLabel({
		zIndex:10,
		text:_.has(args, 'name') ? args.name : "",
		top:'60%',
		font : {
			fontSize: _.has(args, 'fontSize') ? args.fontSize : w*.2	
		}
	});
	
	button.add(btnName);
	button.add(currentValLbl);
	
	//Toggle the button on/off when clicked
	button.addEventListener('click',function(e){
		var val = currentValLbl.text;
		if(val > 0) {
			currentValLbl.setText("0");
			sliderView.setValue(0);
			turnBtnOff();
			buttonClicked("off");
		} else {
			currentValLbl.setText("100");
			sliderView.setValue(100);
			turnBtnOn();
			buttonClicked("on");
		}
		
	});

	//Add the button into the middle of the sliderView	
	sliderView.add(button);
	

	//internal functions
	function turnBtnOn() {
		button.setBackgroundGradient({
		 	colors: [
	            {
	                color: _.has(args, 'btnBackgroundColor') ? args.btnBackgroundColor: 'white',
	                offset: 0.50
	            }, {
	                color:  _.has(args, 'btnOnColor') ? args.btnOnColor: 'red',
	                offset: 0.50
	            }
	        ]	
		});	
	}

	function turnBtnOff () {
		button.setBackgroundGradient({
		 	colors: [
	            {
	                color:  _.has(args, 'btnBackgroundColor') ? args.btnBackgroundColor: 'white',
	                offset: 0.50
	            }, {
	                color: _.has(args, 'btnOffColor') ? args.btnOffColor: 'gray',
	                offset: 0.50
	            }
	        ]	
		});	
	}
	
	
	//Callbacks
	var onClickCallback, onTouchEnd;
	
	// The button has been clicked, call callback
	function buttonClicked(e) {
		if(typeof(onClickCallback) === 'function') {
			onClickCallback(e);
		}
	}
	
	sliderView.onClick = function(callback) {
		onClickCallback = callback;
	};
	
	
	//The slider has been touched, call callback
	function touchEnd(e) {
		if(typeof(onTouchEndCallback) === 'function') {
			onTouchEndCallback(e);
		}
	}

	sliderView.onTouchEnd = function(callback) {
		onTouchEndCallback = callback;
	};
	
	sliderView.setBtnValue = function (e) {
		sliderView.setValue(e);
		turnBtnOn();
	};
	
	return sliderView;
};

