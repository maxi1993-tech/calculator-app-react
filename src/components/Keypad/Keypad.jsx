import Key from "../Key/Key"
import "./_keypad.scss"

function Keypad({ keys, handleKey }) {
    return (
        <div className="keypad">
            {keys.map((key) => (
                <Key key={key.value ?? key.label}
                    handleKey={handleKey}
                    label={key.label}
                    value={key.value}
                    action={key.action} />
            ))}
        </div>
    )
}

export default Keypad
