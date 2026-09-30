import { useState } from "react"
import calculate from "../utils/calculate"

function useCalculator() {
    const [display, setDisplay] = useState("0")
    const [accumulator, setAccumulator] = useState(null)
    const [lastOperand, setLastOperand] = useState(null)
    const [operator, setOperator] = useState(null)
    const [lastOperator, setLastOperator] = useState(null)
    const [shouldResetDisplay, setShouldResetDisplay] = useState(false)

    function handleDigit(digit) {

        if (shouldResetDisplay === true || display === "0") {
            setDisplay(digit)
            setShouldResetDisplay(false)
        } else {
            setDisplay(display + digit)
        }
    }

    function handleDecimal() {

        if (shouldResetDisplay === true) {
            setDisplay("0.")
            setShouldResetDisplay(false)
        } else if (!display.includes(".")) {
            setDisplay(display + ".")
        }
    }

    function handleOperator(nextOperator) {

        setAccumulator(display)
        setOperator(nextOperator)
        setLastOperator(nextOperator)
        setShouldResetDisplay(true)

        if (operator && shouldResetDisplay === false && lastOperator !== "=") {
            const result = calculate(accumulator, operator, display)
            setAccumulator(result)
            setDisplay(String(result))
        }
    }

    function handleEquals() {

        if (operator === null) return

        let result

        if (lastOperator === "=") {
            result = calculate(display, operator, lastOperand)
        } else {
            result = calculate(accumulator, operator, display)
            setLastOperand(display)
        }

        setAccumulator(result)
        setDisplay(String(result))
        setLastOperator("=")
        setShouldResetDisplay(true)
    }

    function handleDelete() { }
    function handleReset() { }

    function handleKey(value, action) {
        console.log(value, action)

        if (action === "reset") {

            handleReset()
        }

        if (action === "delete") {
            handleDelete()
        }

        if (action === "digit") {

            handleDigit(value)
        }

        if (action === "operator") {

            handleOperator(value)
        }

        if (action === "equals") {

            handleEquals()
        }

        if (action === "decimal") {

            handleDecimal(value)
        }


    }

    return { display, handleKey }
}

export default useCalculator
