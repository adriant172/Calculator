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
    const buttonValues = ["1","2","3","+","4","5","6","-","7","8","9","·", "C", "0", "=","÷"];
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
const operators = ["+", "-", "·", "÷"]
let currentValue = "";
let previousValue;
let currentOperator;
let currentResult;

calcButtons.forEach(button => {
    button.addEventListener('click', () => {
        //Check to see if button value is a number, operator symbol or clear
        //If it is a number then either change current value or append the number to it 
        if (parseInt(button.textContent) >= 0 && parseInt(button.textContent) <= 9) {
            if (previousValue && currentOperator && !currentValue || currentResult) {
                 currentValue = button.textContent;
            }else {
                currentValue += button.textContent;    
            }
            display.textContent = currentValue;
        }else if (operators.includes(button.textContent)) {
            if (currentValue && previousValue && currentOperator) {
                if (currentValue == 0 && currentOperator === "÷") {
                    display.textContent = "That calculation is not allowed!!";
                    return;
                }
                result = operate(currentOperator, previousValue, parseInt(currentValue));
                display.textContent = result;
                currentValue = "";
                previousValue = result;
                currentOperator = button.textContent;
            } else if (currentValue){
                currentOperator = button.textContent;
                previousValue = parseInt(currentValue);
                currentValue = "";
                } else {
                    currentOperator = button.textContent;
                    previousValue = parseInt(currentResult);
                    currentResult = "";
                }
            //If value is a operator symbol keep display value on screen and save operator in operator variable, then save the display value into the previousValue variable
        } else if ( button.textContent === "=") {
            if (currentValue && previousValue && currentOperator) {
                if (currentValue == 0 && currentOperator === "÷") {
                    display.textContent = "That calculation is not allowed!!";
                    return;
                }
                currentResult = operate(currentOperator, previousValue, parseInt(currentValue));
                display.textContent = currentResult;
                currentValue= "";
                previousValue = "";
                currentOperator = "";
            }

        } else if (button.textContent === "C") {
            currentValue = "";
            previousValue = "";
            currentOperator = "";
            currentResult = "";
            display.textContent = "0";
        }
    })
})
