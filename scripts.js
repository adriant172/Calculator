function add() {
    const numbers = Array.from(arguments);
    sum = numbers.reduce((total, number) => {
        number = parseInt(number);
        return total + number;
    }, 0)
    return sum;
}

function subtract() {
    const numbers = Array.from(arguments);
    return numbers[0] - numbers[1];
}

function multiply(array) {
    const result = array.reduce((currentProduct, num) => {
        return currentProduct * num;
    })
    return result;
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
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}