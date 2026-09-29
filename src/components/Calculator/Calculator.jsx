import { useState } from "react"
import "./_calculator.scss"
import Header from "../Header/Header"

function Calculator() {
    const [display, setDisplay] = useState("0")
    const [accumulator, setAccumulator] = useState(null)
    const [lastOperand, setLastOperand] = useState(null)
    const [operator, setOperator] = useState(null)
    const [lastOperator, setLastOperator] = useState(null)
    const [shouldResetDisplay, setShouldResetDisplay] = useState(false)

    return (
        <div className="calculator">
            <Header />
            <main className="calculator__main"></main>
        </div>
    )
}

export default Calculator
