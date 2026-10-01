import "./_calculator.scss"
import Header from "../Header/Header"
import Display from "../Display/Display"
import Keypad from "../Keypad/Keypad"
import { calculatorKeys } from "../../data/calculatorKeys"
import useCalculator from "../../hooks/useCalculator"
import { useEffect } from "react"
import Horns from "../Horns/Horns"

function Calculator() {
    const { display, handleKey, angerCount } = useCalculator()

    useEffect(() => {
        document.documentElement.dataset.anger = angerCount
    }, [angerCount])

    return (
        <div className="calculator">
            <Horns angerCount={angerCount} />
            <Header />
            <main className="calculator__main">
                <Display display={display} />
                <Keypad keys={calculatorKeys} handleKey={handleKey} />
            </main>
        </div>
    )
}

export default Calculator
