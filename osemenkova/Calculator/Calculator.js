/**
 * Created by Оксана on 18.12.2014.
 */

function Calculator(firstNumber, secondNumber){
   this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
    this.add = function(){
        return this.firstNumber + this.secondNumber;
    };
    this.minus = function(){
        return this.firstNumber - this.secondNumber;
    };
    this.multiply = function(){
        return this.firstNumber * this.secondNumber;
    };

    this.divide = function(){
        return this.firstNumber / this.secondNumber;
    };

    this.printData = function(){
        var outputData = "Entered numbers: " + this.firstNumber + " and " + this.secondNumber + "\n" + "Result of calculation: ";
        return outputData;
    }
}

var first = parseFloat(prompt("Enter first number, please"));

var second = parseFloat(prompt("Enter second number, please"));

var operation = prompt("Enter operation of calculation, please");

var c = new Calculator(first, second);

switch(operation){
    case "+": alert(c.printData() + c.add());
        break;
    case "-": alert(c.printData() + c.minus());
        break;
    case "*": alert(c.printData() + c.multiply());
        break;
    case "/": alert(c.printData() + c.divide());
        break;
    default : alert("Incorrect operation!");
}



