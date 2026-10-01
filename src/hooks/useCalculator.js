import { useState } from "react"
import calculate from "../utils/calculate"

const angerMessages = [
    "Can't divide by 0",
    "Can't divide by 0",
    "Again? Cute.",
    "Math not your thing?",
    "Zero. Still zero. Genius.",
    "Did you skip school?!",
    "BACK TO KINDERGARTEN!"
]

function useCalculator() {
    const [display, setDisplay] = useState("0")
    const [accumulator, setAccumulator] = useState(null)
    const [lastOperand, setLastOperand] = useState(null)
    const [operator, setOperator] = useState(null)
    const [lastOperator, setLastOperator] = useState(null)
    const [shouldResetDisplay, setShouldResetDisplay] = useState(false)
    const [isError, setIsError] = useState(false)

    const [angerCount, setAngerCount] = useState(0)

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

            if (!Number.isFinite(result)) {
                setIsError(true)

                let nextCount

                if (angerCount === 6) {
                    nextCount = 0
                } else {
                    nextCount = angerCount + 1
                }

                setAngerCount(nextCount)
                setDisplay(angerMessages[nextCount])

                return
            }
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

        if (!Number.isFinite(result)) {
            setIsError(true)

            let nextCount

            if (angerCount === 6) {
                nextCount = 0
            } else {
                nextCount = angerCount + 1
            }

            setAngerCount(nextCount)
            setDisplay(angerMessages[nextCount])

            return
        }

        setAccumulator(result)
        setDisplay(String(result))
        setLastOperator("=")
        setShouldResetDisplay(true)
    }

    function handleDelete() {

        const shortened = display.slice(0, -1)

        if (shortened === "") {
            setDisplay("0")
        } else {
            setDisplay(shortened)
        }
    }

    function resetCalculator() {
        setDisplay("0")
        setAccumulator(null)
        setLastOperand(null)
        setOperator(null)
        setLastOperator(null)
        setShouldResetDisplay(false)
        setIsError(false)
    }

    function handleReset() {

        resetCalculator()
    }

    function handleKey(value, action) {

        if (isError === true) {
            resetCalculator()

            if (action === "digit") {
                setDisplay(value)
            }

            if (action === "decimal") {
                setDisplay("0.")
            }
            return
        }

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

    return { display, handleKey, angerCount }
}

export default useCalculator
