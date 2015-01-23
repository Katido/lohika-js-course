var MoneyBox = MoneyBox || {};

MoneyBox = (function() {

	var moneyBox = [];
	
	putDollars = function(dollars) { moneyBox.push(dollars); },
	put = 		 function(dollars) { putDollars(dollars); 	 },
	get = function() { 
		var total = 0;
		for(var i=0; i < moneyBox.length; i++) {
			total += moneyBox[i];
		}
		return total;
	};

	return {
		put: put,
		get: get
	}
}());