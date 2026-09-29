import "./_calculator.scss"
import Header from "../Header/Header"
import Display from "../Display/Display"
import Keypad from "../Keypad/Keypad"
import { calculatorKeys } from "../../data/calculatorKeys"
import useCalculator from "../../hooks/useCalculator"

function Calculator() {
    const { display, handleKey } = useCalculator()

    return (
        <div className="calculator">
            <Header />
            <main className="calculator__main">
                <Display display={display} />
                <Keypad keys={calculatorKeys} handleKey={handleKey} />
            </main>
        </div>
    )
}

export default Calculator
