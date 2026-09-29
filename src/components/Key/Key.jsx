import "./_key.scss"

function Key({ label, value, action, handleKey }) {
    const modifier = ["delete", "reset", "equals"].includes(action)
        ? ` key--${action}`
        : ""

    return (
        <button
            onClick={() => handleKey(value, action)}
            className={`key${modifier}`}
            type="button"
        >
            {label ?? value}
        </button>
    )
}

export default Key
