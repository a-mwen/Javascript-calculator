// This line of code uses the document object to select an element with the class name "display"
let outputLower = document.querySelector("display");

// This function sets the innerHTML of the element with the id 'display' to '0', effectively clearing the display
function clearDisplay() {
    document.getElementById('display').innerHTML = '0';
}

// This function appends the input number to the display. If the current display is '0', it replaces it with the number.
function appendNumber(number) {
    var display = document.getElementById('display').innerHTML;
    if (display === '0') {
        document.getElementById('display').innerHTML = number;
    } else {
        document.getElementById('display').innerHTML += number;
    }
}

// This function appends a decimal point to the display if one does not already exist.
function appendDecimal() {
    var display = document.getElementById('display').innerHTML;
    if (display.indexOf('.') === -1) {
        document.getElementById('display').innerHTML += '.';
    }
}

// This function adds the input operator to the end of the display if the current display is not '0'.
function operate(operator) {
    var display = document.getElementById('display').innerHTML;
    if (display !== '0') {
        document.getElementById('display').innerHTML = display + operator;
    }
}

// This function evaluates the current display and sets it as the new display value.
function calculate() {
    var display = document.getElementById('display').innerHTML;
    var result = eval(display);
    document.getElementById('display').innerHTML = result;
}