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

const calculator = document.querySelector('.calculator');

function createCalculator() {
    const buttonValues = ["1","2","3","+","4","5","6","-","7","8","9","x", "C", "0", "=","÷"];
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
const operators = ["+", "-", "x", "÷"]

let values  = [];
let currentNum = "";
let currentOperator = "";


calcButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (parseInt(button.textContent) >= 0 && parseInt(button.textContent) <= 9) {
            if(values[0] && values[1]) {
                currentNum = "";
                values[2] = button.textContent;
            }else if (values[0]) {
                currentNum = "";
                values.pop();
            }
             else if (values[2]) {
                values[2] += button.textContent;
            }
            currentNum+= button.textContent;
            display.textContent = currentNum;
        } else if (operators.includes(button.textContent)) {
            currentOperator = button.textContent;
            if (values[2]) {
                if (values[2] == "0" && values[1] === "÷") {
                    display.textContent = "That calculation is not allowed!!";
                    return;
                }
                currentNum = operate(parseInt(values[0]), values[1],parseInt(values[2]));
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
        } else if (button.textContent === "=") {
            if(values[2]) {
                if (values[2] == "0" && values[1] === "÷") {
                    display.textContent = "That calculation is not allowed!!";
                    return;
                }
                currentNum = operate(parseInt(values[0]), values[1],parseInt(values[2]));
                currentNum = roundIfDecimal(currentNum);
                while (values.length > 0) {
                    values.pop();
                }
                values.push(currentNum);
                
            } else if (values[1]) {
                currentNum = operate(parseInt(values[0]), values[1],parseInt(values[0]));
                currentNum = roundIfDecimal(currentNum);
                while (values.length > 0) {
                    values.pop();
                }
                values.push(currentNum)
            }
            display.textContent = currentNum;
            currentOperator = "";

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





