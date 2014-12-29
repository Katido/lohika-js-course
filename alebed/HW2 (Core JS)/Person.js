var Person = Person || {};

Person = (function() {

	var name = "noname";
	
	giveName = function(fullName) {
		name = fullName;
	},
	getName = function() {
		return name;
	},
	saveMoney = function(dollars) {
		MoneyBox.put(dollars);
	},
	showMoney = function() {
		return "In " + getName()+"'s money box " + MoneyBox.get() + " dollars for now.";
	};

	return {
		giveName: giveName,
		getName: getName,
		saveMoney: saveMoney,
		showMoney: showMoney
	}
}());