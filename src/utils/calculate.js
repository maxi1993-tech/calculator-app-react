function calculate(first, operator, second) {
    const firstNumber = Number(first)
    const secondNumber = Number(second)
    let result

    switch (operator) {

        case "+":
            result = firstNumber + secondNumber
            break

        case "-":
            result = firstNumber - secondNumber
            break

        case "/":
            result = firstNumber / secondNumber
            break

        case "*":
            result = firstNumber * secondNumber
            break
    }
    result = Number((result).toPrecision(12))
    return result
}

export default calculate

