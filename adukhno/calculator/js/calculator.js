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

window.addEventListener(
		"load",
		function () {

			window.document.getElementById( "add" ).addEventListener(
					"click",
					function () {
						console.log( "Click on add button" );
						var numberOne = window.document.getElementById( "number-one" ).getAttribute( "value" );
						var numberTwo = window.document.getElementById( "number-two" ).getAttribute( "value" );
						var result = calculator.add( numberOne, numberTwo );
						var resultElement = window.document.getElementById( "result" );
						resultElement.setAttribute( "value", result );
					}
			);

			window.document.getElementById( "sub" ).addEventListener(
					"click",
					function () {
						console.log( "Click on sub button" );
						var numberOne = window.document.getElementById( "number-one" ).getAttribute( "value" );
						var numberTwo = window.document.getElementById( "number-two" ).getAttribute( "value" );
						var result = calculator.sub( numberOne, numberTwo );
						var resultElement = window.document.getElementById( "result" );
						resultElement.setAttribute( "value", result );
					}
			);

			window.document.getElementById( "mul" ).addEventListener(
					"click",
					function () {
						console.log( "Click on mul button" );
						var numberOne = window.document.getElementById( "number-one" ).getAttribute( "value" );
						var numberTwo = window.document.getElementById( "number-two" ).getAttribute( "value" );
						var result = calculator.mul( numberOne, numberTwo );
						var resultElement = window.document.getElementById( "result" );
						resultElement.setAttribute( "value", result );
					}
			);

			window.document.getElementById( "div" ).addEventListener(
					"click",
					function () {
						console.log( "Click on div button" );
						var numberOne = window.document.getElementById( "number-one" ).getAttribute( "value" );
						var numberTwo = window.document.getElementById( "number-two" ).getAttribute( "value" );
						var result = calculator.div( numberOne, numberTwo );
						var resultElement = window.document.getElementById( "result" );
						resultElement.setAttribute( "value", result );
					}
			);
		}
);