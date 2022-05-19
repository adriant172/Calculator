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