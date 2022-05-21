function add(num1, num2) {
        return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
        return num1 * num2; 
}

function divide(dividend, divisor) {
    return dividend / divisor;
}

function operate(operator, num1, num2) {
    switch(operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "·":
            return multiply(num1, num2);
        case "÷":
            return divide(num1, num2);
    }
}

function createCalculator() {
    const buttonValues = [1,2,3,"+",4,5,6,"-",7,8,9,"·", "C", 0, "=","÷"];
    const calculator = document.querySelector('.calculator');
    for (value of buttonValues) {
        let calculatorButton = document.createElement('div');
        calculatorButton.classList.add('calButton');
        calculatorButton.textContent = value;
        calculator.appendChild(calculatorButton);
    }
}

createCalculator();