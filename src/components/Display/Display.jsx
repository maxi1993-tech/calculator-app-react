import "./_display.scss"
import Eyes from "../Eyes/Eyes"

function Display({ display, isError }) {

    if (isError) {
        return <output className="display">
            <Eyes />
            <span className="sr-only">{display}</span>
        </output>
    }

    return (
        <output className="display">{display}</output>
    )

}

export default Display
