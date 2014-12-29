function calculate() {
    var inputValue = document.getElementById("input").value;
    var result = eval(inputValue);
    display(result);
}

function display(operation) {
    document.getElementById("input").value = operation;
}

function btn(value) {
    document.getElementById("input").value += value;
}

