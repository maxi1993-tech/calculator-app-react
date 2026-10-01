import "./_display.scss"
import Eyes from "../Eyes/Eyes"

function Display({ display, isError, angerCount }) {

    if (isError && angerCount >= 2) {
        return <output className="display">
            <Eyes angerCount={angerCount} />
            <span className="sr-only">{display}</span>
        </output>
    }

    return (
        <output className="display">{display}</output>
    )

}

export default Display
