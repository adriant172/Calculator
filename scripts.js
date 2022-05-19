function add() {
    const numbers = Array.from(arguments)
    sum = numbers.reduce((total, number) => {
        number = parseInt(number);
        return total + number;
    }, 0)
    return sum;
}