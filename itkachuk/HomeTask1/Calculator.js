// Variant 1
var Calculator = { 
    plus: function(arg1, arg2) { 
        if (this.validateArgs(arguments)) return arg1 + arg2;        
    }, 
    minus: function(arg1, arg2) { 
        if (this.validateArgs(arguments)) return arg1 - arg2; 
    },
	multiply: function(arg1, arg2) { 
        if (this.validateArgs(arguments)) return arg1 * arg2;        
    }, 
    divide: function(arg1, arg2) { 
        if (this.validateArgs(arguments)) return arg1 / arg2; 
    },

	validateArgs: function(args) {
		if (args.length !== 2) {
			console.log("Calculator operation requires two input arguments");
			return false;
		}
		if (typeof(args[0]) !== 'number') { 
            console.log("First input argument is not a number");     
            return false; 
        }             
        if (typeof(args[1]) !== 'number') { 
            console.log("Second input argument is not a number"); 
            return false; 
        }
		return true;
	}
};

// Variant 2
function Calculator() {
	this.plus = function(a, b) {
        if (this.validateArgs(arguments)) return a + b;        
    }; 
    this.minus = function(a, b) { 
        if (this.validateArgs(arguments)) return a - b; 
    };
	this.multiply = function(a, b) { 
        if (this.validateArgs(arguments)) return a * b;        
    }; 
    this.divide = function(a, b) {
        if (this.validateArgs(arguments)) return a / b; 
    };

	this.validateArgs = function(args) {
		if (args.length !== 2) {
			console.log("Calculator operation requires two input arguments");
			return false;
		}
		if (typeof(args[0]) !== 'number') { 
            console.log("First input argument is not a number");     
            return false; 
        }             
        if (typeof(args[1]) !== 'number') { 
            console.log("Second input argument is not a number"); 
            return false; 
        }
		return true;
	};
};

// Usage:
var calc = new Calculator();
calc.plus(2,3);
