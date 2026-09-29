import { useState } from "react"

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

    function handleDecimal() { }
    function handleOperator(nextOperator) { }
    function handleEquals() { }
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
