import "./_key.scss"

function Key({ label, value, action }) {
    const modifier = ["delete", "reset", "equals"].includes(action)
        ? ` key--${action}`
        : ""

    return (
        <button
            className={`key${modifier}`}
            type="button"
        >
            {label ?? value}
        </button>
    )
}

export default Key
