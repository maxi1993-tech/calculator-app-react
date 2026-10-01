import "./_horns.scss"

const hornHeights = [0, 0, 20, 30, 40, 50, 58]

function Horns({ angerCount }) {
    const height = hornHeights[angerCount]

    if (angerCount < 2) return null

    return (
        <div className="horns" aria-hidden="true">
            <svg width="46" height={height} viewBox="0 0 46 60" preserveAspectRatio="none">
                <path d="M6 60 Q-2 26 20 0 Q14 30 40 60 Z" fill="#d03f2f" />
            </svg>
            <svg width="46" height={height} viewBox="0 0 46 60" preserveAspectRatio="none">
                <path d="M40 60 Q48 26 26 0 Q32 30 6 60 Z" fill="#d03f2f" />
            </svg>
        </div>
    )
}

export default Horns
