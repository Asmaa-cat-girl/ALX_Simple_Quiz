const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const resultSpan = document.getElementById('calculation-result');

function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        alert("Error: Division by zero!");
        return;
    }
    return number1 / number2;
}

function calculateResult(operator) {
    const number1 = parseFloat(number1Input.value) || 0; // Handle empty input as 0
    const number2 = parseFloat(number2Input.value) || 0;

    let result;
    switch (operator) {
        case '+':
            result = add(number1, number2);
            break;
        case '-':
            result = subtract(number1, number2);
            break;
        case '*':
            result = multiply(number1, number2);
            break;
        case '/':
            result = divide(number1, number2);
            break;
        default:
            console.error("Invalid operator:", operator);
    }

    resultSpan.textContent = result;
}

addButton.addEventListener('click', () => calculateResult('+'));
subtractButton.addEventListener('click', () => calculateResult('-'));
multiplyButton.addEventListener('click', () => calculateResult('*'));
divideButton.addEventListener('click', () => calculateResult('/'));

