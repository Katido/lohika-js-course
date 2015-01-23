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

	var digits = {
		"one":1,
		"two":2,
		"three":3,
		"four":4,
		"five":5,
		"six":6,
		"seven":7,
		"eight":8,
		"nine":9,
		"zero":0
	};

	var putNumber = function( number, element ) {
		var valueAttribute = element.getAttribute( "value" );
		numberOneElement.setAttribute( "value", valueAttribute + number );
	}

	var numberOneElement = window.document.getElementById("number-one");
	var numberTwoElement = window.document.getElementById("number-two");

	function getProperFunc( digit, element ) {
		var localDigit = digit;
		var localElement = element;
		var procFunc = function() {
				return putNumber( localDigit, localElement )
			};
		return procFunc;
	};

	for (var key in digits) {
		console.log( "key ", key );
		var digit = digits[key];
		var elementNO = window.document.getElementById( key + "-no" );
		elementNO.addEventListener( "click", getProperFunc( digit, numberOneElement ) );
		var elementNT = document.getElementById( key + "-nt" );
		elementNT.addEventListener( "click", getProperFunc( digit, numberTwoElement ) );
	}

	document.getElementById( "add" ).addEventListener(
			"click",
			function () {
				console.log( "Click on add button" );
				var numberOne = numberOneElement.getAttribute( "value" );
				var numberTwo = numberTwoElement.getAttribute( "value" );
				var result = calculator.add( numberOne, numberTwo );
				var resultElement = window.document.getElementById( "result" );
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
				var resultElement = window.document.getElementById( "result" );
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
				var resultElement = window.document.getElementById( "result" );
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
				var resultElement = window.document.getElementById( "result" );
				resultElement.setAttribute( "value", result );
			}
	);
};

initializeListeners();