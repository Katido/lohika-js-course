function Calculator() {
	this.add = function( a, b ) {
		var numberOne = number( a );
		var numberTwo = number( b );
		return numberOne + numberTwo;
	}

	this.sub = function( a, b ) {
		var numberOne = number( a );
		var numberTwo = number( b );
		return numberOne - numberTwo;
	}

	this.mul = function( a, b ) {
		var numberOne = number( a );
		var numberTwo = number( b );
		return numberOne * numberTwo;
	}

	this.div = function( a, b ) {
		var numberOne = number( a );
		var numberTwo = number( b );
		return numberOne / numberTwo;
	}

	this.number = function( maybeNumber ) {
		if( $.isNumber( maybeNumber ) ) {
			return maybeNumber;
		}
		else {
			return new Number( maybeNumber );
		}
	}
}