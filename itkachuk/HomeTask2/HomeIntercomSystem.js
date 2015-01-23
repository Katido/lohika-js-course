// Calling Unit
var CallingUnit = (function(){
	// module variables
	var isDoorOpened=false, inputNumbersCombination="", subscribers=[];
	// module methods - public
	var openTheDoor = function(){
		if (!isDoorOpened) {isDoorOpened = true;}
	}
	var enterDigit = function(digit){
		if (typeof digit == 'number') {
			inputNumbersCombination += digit;
			console.log("User input indicator: " + inputNumbersCombination);
		} else if (digit === 'K') { // 'K' is the symbol of combination end, after receiving we can start to call the subscriber
			console.log("Calling subscriber with flat number: " + inputNumbersCombination);
			callSubscriber();
		}
	}
	var clearInput = function(){
		inputNumbersCombination = "";
	}
	var registerSubscriber = function(flatNumber){
		if (+flatNumber > 0) {
			subscribers.push(new SubscriberUnit(flatNumber));
		}
	}
	var printSubscribers = function(){
		console.log("Subscribers: ");
		for (var i = 0; i < subscribers.length; i++) {
			console.log(subscribers[i].getFlatNumber() + ",");
		}
	}
	// module methods - private
	var callSubscriber = function(){
		for (var i = 0; i < subscribers.length; i++) {
			if (subscribers[i].getFlatNumber() === inputNumbersCombination) {
				subscribers[i].setRingingOn();
			}
		}
	}
	return {
		openTheDoor: openTheDoor,
		enterDigit: enterDigit,
		clearInput: clearInput,
		registerSubscriber: registerSubscriber,
		printSubscribers: printSubscribers
	}
})();


// Subscriber Unit
var SubscriberUnit = (function(){
	// module variables
	//var flatNumber, volumeLevel=2, isRingingOn=false; // moved to constructor and prototype (due to specific module patern - for creating multi-instances)
	// module methods - private
	
	// module methods - public
	function setVolume(newVolumeLevel){
		if (newVolumeLevel < 1 || newVolumeLevel > 5) {
			console.log("Volume should be in range 1...5");
		} else {
			this.volumeLevel = newVolumeLevel;
		}
	}
	function setRingingOn(){
		this.isRingingOn = true;
		console.log("Now the ringing is on in flat number " + this.flatNumber + " with volume level " + this.volumeLevel);
	}
	function getFlatNumber(){
		return this.flatNumber;
	}
	// constructor
	var SubscriberUnit = function(flatNumber){
		// one private property
		this.flatNumber = flatNumber;
	}
	// public methods and properties - in prototype
	SubscriberUnit.prototype = {
		constructor: SubscriberUnit,
		volumeLevel: 2,
		isRingingOn: false,
		setVolume: setVolume,
		setRingingOn: setRingingOn,
		getFlatNumber: getFlatNumber
	}
	
	return SubscriberUnit;
})();