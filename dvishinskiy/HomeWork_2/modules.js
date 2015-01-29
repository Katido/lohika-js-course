var Generator= (function () {
	
	function generateValues(){
		output = [];
		for (i=0;i<12;i++){
			output[i] = Math.random();
		}
		return output;
	}
	
	return {
		generate: function(){
			return generateValues();
		}
	}
	
})();

var Module2= (function () {
    this.privateValues = [];
	
	function fillPrivateValues(elements){
		privateValues = elements;
	}
	
	return {
		makeAlert: function(){
			alert("Public method invoked.");
		},
		
		fillPrivate: function(generator){
			fillPrivateValues(generator.generate());
			return privateValues;
		}
	}
	
})();

function bindAll(){
	$("#public").bind("click", Module2.makeAlert);
	$("#private").bind("click", function(){
		alert(Module2.fillPrivate(Generator))
	});
}