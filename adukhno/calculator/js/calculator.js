function Calculator() {
	this.add = function ( a, b ) {
		console.log( "Addition numbers ", a, " and ", b );
		var numberOne = this.number( a );
		var numberTwo = this.number( b );
		return numberOne + numberTwo;
	};

	this.sub = function ( a, b ) {
		console.log( "Subtraction numbers ", a, " and ", b );
		var numberOne = this.number( a );
		var numberTwo = this.number( b );
		return numberOne - numberTwo;
	};

	this.mul = function ( a, b ) {
		console.log( "Multiplication numbers ", a, " and ", b );
		var numberOne = this.number( a );
		var numberTwo = this.number( b );
		return numberOne * numberTwo;
	};

	this.div = function ( a, b ) {
		console.log( "Division numbers ", a, " and ", b );
		var numberOne = this.number( a );
		var numberTwo = this.number( b );
		return numberOne / numberTwo;
	};

	this.number = function ( maybeNumber ) {
		if( $.isNumeric( maybeNumber ) ) {
			return maybeNumber;
		}
		else {
			return new Number( maybeNumber );
		}
	};
}

var calculator = new Calculator();

function initializeListeners() {

	function putNumber( number, element ) {
		var valueAttribute = element.getAttribute( "value" );
		console.log( "Value attribute => ", valueAttribute, " number => ", number );
		if( valueAttribute ) {
			element.setAttribute( "value", valueAttribute + number );
		}
		else {
			element.setAttribute( "value", number );
		}
	}

	function setListenersOnDigitsButton( digitsBlockName, textElement ) {
		var buttons = document.getElementById( digitsBlockName ).getElementsByTagName( "button" );
		var element = textElement;
		for( var i = buttons.length - 1; i > -1; i-- ) {
			var button = buttons[i];
			console.log( "button => ", button );
			console.log( "button value => ", button.getAttribute( "value" ) );
			button.addEventListener(
					"click", 
					function() {
						putNumber( this.getAttribute( "value" ), element );
					}
			);
		}
	}

	var numberOneElement = document.getElementById( "number-one" );
	var numberTwoElement = document.getElementById( "number-two" );
	
	setListenersOnDigitsButton( "box-one", numberOneElement );
	setListenersOnDigitsButton( "box-two", numberTwoElement );

	var resultElement = document.getElementById( "result" );

	document.getElementById( "add" ).addEventListener(
			"click",
			function () {
				console.log( "Click on add button" );
				var numberOne = numberOneElement.getAttribute( "value" );
				var numberTwo = numberTwoElement.getAttribute( "value" );
				var result = calculator.add( numberOne, numberTwo );
				resultElement.setAttribute( "value", result );
			}
	);

	document.getElementById( "sub" ).addEventListener(
			"click",
			function () {
				console.log( "Click on sub button" );
				var numberOne = numberOneElement.getAttribute( "value" );
				var numberTwo = numberTwoElement.getAttribute( "value" );
				var result = calculator.sub( numberOne, numberTwo );
				resultElement.setAttribute( "value", result );
			}
	);

	document.getElementById( "mul" ).addEventListener(
			"click",
			function () {
				console.log( "Click on mul button" );
				var numberOne = numberOneElement.getAttribute( "value" );
				var numberTwo = numberTwoElement.getAttribute( "value" );
				var result = calculator.mul( numberOne, numberTwo );
				resultElement.setAttribute( "value", result );
			}
	);

	document.getElementById( "div" ).addEventListener(
			"click",
			function () {
				console.log( "Click on div button" );
				var numberOne = numberOneElement.getAttribute( "value" );
				var numberTwo = numberTwoElement.getAttribute( "value" );
				var result = calculator.div( numberOne, numberTwo );
				resultElement.setAttribute( "value", result );
			}
	);
	
	document.getElementById( "reset" ).addEventListener(
			"click",
			function() {
				numberOneElement.setAttribute( "value", "" );
				numberTwoElement.setAttribute( "value", "" );
				resultElement.setAttribute( "value", "0" );
			}
	);
}

initializeListeners();