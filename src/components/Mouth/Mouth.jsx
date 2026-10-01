import "./_mouth.scss"
import { mouthLevels } from "../../data/mouthLevels"

function Mouth({ display, isError, angerCount }) {
    if (!isError || angerCount < 2) return null

    const mouth = mouthLevels[angerCount]

    return (
        <div className="mouth">
            <svg width="230" height="92" viewBox="0 0 160 64" aria-hidden="true">
                <path d={mouth.cavity} fill="#2a0505" />
                <path d={mouth.tongue} fill="#e46a74" />
                <path d={mouth.teeth} fill="#ffffff" />
                <path d={mouth.cavity} fill="none" stroke="#ffffff" strokeWidth="4" strokeLinejoin="round" />
                <path d={mouth.line} fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="mouth__message" aria-hidden="true">{display}</p>
        </div>
    )
}

export default Mouth
