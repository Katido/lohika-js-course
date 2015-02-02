/*!
 * Cal logics
 */
 		
function Calculator () {
    this.firstVal = "0";
    this.operation = null;
	this.secondVal = null;
	
	this.calculate = function() {
		if (this.operation === "*"){
			return +this.firstVal * +this.secondVal;
		}
		if (this.operation === "/"){
			return +this.firstVal / +this.secondVal;
		}
		if (this.operation === "+"){
			return +this.firstVal + +this.secondVal;
		}
		if (this.operation === "-"){
			return +this.firstVal - +this.secondVal;
		}
		return "0";
    };
	
}

function bindAll(){
	var Calc = new Calculator();
	$(".num").bind("click", function(){
		if (Calc.operation === null){
			if ($(this).text() === "." && Calc.firstVal.indexOf(".") > -1){
				return;
			}
			if (Calc.firstVal === "0"){
				if ($(this).text() === "."){
					Calc.firstVal = "0.";
					return;
				}
				Calc.firstVal = $(this).text();
			} else{
				Calc.firstVal += $(this).text();
			}
			$("#val").val(Calc.firstVal);
		} else{
			if (Calc.secondVal === null){
				Calc.secondVal = $(this).text();
			} else{
				Calc.secondVal += $(this).text();
			}
			$("#val").val(Calc.secondVal);
		}
	});
	$(".op").bind("click", function(){
		if (Calc.operation === null){
			Calc.operation = $(this).text();
		} else {
			Calc.firstVal = Calc.calculate();
			Calc.secondVal = null;
			Calc.operation = $(this).text();
			$("#val").val(Calc.firstVal);
		}		
	});
	$(".calc").bind("click", function(){
		if (Calc.firstVal !== "0"){
			Calc.firstVal = Calc.calculate();
			$("#val").val(Calc.firstVal);			
			Calc.secondVal = null;
			Calc.operation = null;
		}
	});
	$("#clr").bind("click", function(){
		$("#val").val(0);
		Calc.firstVal = "0";
		Calc.secondVal = null;
		Calc.operation = null;
	});
}
