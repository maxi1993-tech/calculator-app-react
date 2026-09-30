function calculate(first, operator, second) {
    const firstNumber = Number(first)
    const secondNumber = Number(second)


    switch (operator) {

        case "+":
            return firstNumber + secondNumber

        case "-":
            return firstNumber - secondNumber

        case "/":
            return firstNumber / secondNumber

        case "*":
            return firstNumber * secondNumber
    }
}

export default calculate
