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

const calculator = document.querySelector('.calculator');

function createCalculator() {
    const buttonValues = [1,2,3,"+",4,5,6,"-",7,8,9,"·", "C", 0, "=","÷"];
    for (value of buttonValues) {
        let calculatorButton = document.createElement('button');
        calculatorButton.classList.add('calButton');
        calculatorButton.textContent = value;
        calculator.appendChild(calculatorButton);
    }
}

createCalculator();

const calcButtons = document.querySelectorAll('.calButton');
const display = document.querySelector('.display-screen')
let displayValue = 0;
let currentOperator;

calcButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (parseInt(button.textContent) >= 0) {
            displayValue = button.textContent;
            display.textContent = displayValue;
        }
    })
})