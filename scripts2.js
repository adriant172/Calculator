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

function operate( num1, operator, num2) {
    switch(operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "x":
            return multiply(num1, num2);
        case "÷":
            return divide(num1, num2);
    }
}

function roundIfDecimal(num) {
    if (Number.isInteger(num)) {
        return num;
    } else {
        return Math.round(num * 100) / 100;
    }
}

function removeTransition(e) {
    if (e.propertyName !== 'transform'){
        return;
    }
    e.target.classList.remove('pressed');
}

const operators = ["+", "-", "x", "÷"]
const calculator = document.querySelector('.calculator');

function createCalculator() {
    const buttonValues = ["1","2","3","+","4","5","6","-","7","8","9","x", "C", "0", ".","÷","=", "del"];
    const keyValues = ["1","2","3","+","4","5","6","-","7","8","9","*", "c", "0", ".","/","Enter", "del"]
    let counter = 0;
    for (value of buttonValues) {
        let calculatorButton = document.createElement('button');
        calculatorButton.classList.add('calButton');
        calculatorButton.dataset.key = keyValues[counter];
        counter++;
        if (value == "=") {
            calculatorButton.classList.add('equalsButton')
        } else if (operators.includes(value)) {
            calculatorButton.classList.add('operatorButton')
        }
        calculatorButton.textContent = value;
        calculator.appendChild(calculatorButton);
    }
}

createCalculator();

const calcButtons = document.querySelectorAll('.calButton');
const display = document.querySelector('.display-screen')


let values  = [];
let currentNum = "";
let currentOperator = "";



function calcLogic (eventType) {
    calcButtons.forEach(button => {
        button.addEventListener(eventType, (e) => {
            button.classList.add('pressed')
            //Only allow one decimal point per number
            if (button.textContent == ".") {
                 if (currentNum.includes(".")){
                     return
                 }
            }
            if (button.textContent === "del") {
                currentNum = currentNum.slice(0, -1);
                display.textContent = currentNum;
            }
            //If button pressed is a number proceed to evaluate whether it needs to be appended to current number or added to the value array
            if (parseInt(button.textContent) >= 0 && parseInt(button.textContent) <= 9 || button.textContent == ".") {
                if (values[2]) {
                    values[2] += button.textContent;
                }else if(values[0] && values[1]) {
                    currentNum = "";
                    values[2] = button.textContent;
                }else if (values[0]) {
                    currentNum = "";
                    values.pop();
                }     
                currentNum+= button.textContent;
                display.textContent = currentNum;
                // When an operator button is selected determine whether to calculate the current values or to append the operator to the values array
            } else if (operators.includes(button.textContent)) {
                currentOperator = button.textContent;
                if (values[2]) {
                    if (values[2] == "0" && values[1] === "÷") {
                        display.textContent = "That calculation is not allowed!!";
                        return;
                    }
                    currentNum = operate(parseFloat(values[0]), values[1],parseFloat(values[2]));
                    currentNum = roundIfDecimal(currentNum);
                    while (values.length > 0) {
                        values.pop();
                    }
                    values.push(currentNum,currentOperator);
                } else if (values[0] || values[1]) {
                    values[1] = currentOperator;
                } else {
                    values.push(currentNum, currentOperator);
                }
                display.textContent = currentNum;
                //When the equals button is selected run calculate function using all three values or if only one number and operator exist run the function using the number for both operands
            } else if (button.textContent === "=") {
                if(values[2]) {
                    if (values[2] == "0" && values[1] === "÷") {
                        display.textContent = "That calculation is not allowed!!";
                        return;
                    }
                    currentNum = operate(parseFloat(values[0]), values[1],parseFloat(values[2]));
                    currentNum = roundIfDecimal(currentNum).toString();
                    while (values.length > 0) {
                        values.pop();
                    }
                    values.push(currentNum);
                    
                } else if (values[1]) {
                    currentNum = operate(parseFloat(values[0]), values[1],parseFloat(values[0]));
                    currentNum = roundIfDecimal(currentNum).toString();
                    while (values.length > 0) {
                        values.pop();
                    }
                    values.push(currentNum)
                }
                display.textContent = currentNum;
                currentOperator = "";
                // When Clear button is selected clear all values
            } else if (button.textContent === "C") {
                currentNum = "";
                currentOperator = "";
                while (values.length > 0) {
                    values.pop();
                }
                display.textContent = "0";
            }     
        })
    })
    
    calcButtons.forEach(button => {
        button.addEventListener('transitionend', removeTransition);
    })
}

calcLogic('click');

//Add keyboard support 
function calcButtonPress(event) {
    const calcKey = document.querySelector(`button[data-key="${event.key}"]`);
    if (!calcKey) return;
    calcKey.click();
}

window.addEventListener('keypress', calcButtonPress);