import "./_eyes.scss"

const calmEye = { sclera: "#ffffff", ring: "#ffffff", ringW: 0, veins: "", iris: 8, irisColor: "#3b4a6b", pupilRx: 4.5, pupilRy: 4.5, pupilX: 32, glint: 1, lid: "M4 12 L60 12 L60 0 L4 0 Z", brow: "M10 9 L56 7" }

const eyeLevels = [
    calmEye,
    calmEye,
    { sclera: "#fff4dc", ring: "#ffffff", ringW: 0, veins: "", iris: 8, irisColor: "#6b4a2a", pupilRx: 4, pupilRy: 4.6, pupilX: 33, glint: 1, lid: "M4 13.1 L60 15.6 L60 0 L4 0 Z", brow: "M10 8.5 L56 10.5" },
    { sclera: "#ffe27a", ring: "#ffb020", ringW: 1, veins: "M9 30 L15 29 L18 31 M55 30 L49 29 L46 32", iris: 9, irisColor: "#d4600a", pupilRx: 2.6, pupilRy: 7, pupilX: 33.9, glint: 0.8, lid: "M4 14.2 L60 19.2 L60 0 L4 0 Z", brow: "M10 8 L56 14" },
    { sclera: "#ffc23a", ring: "#ff7a1a", ringW: 1.5, veins: "M9 30 L15 28 L18 31 M10 34 L16 33 M55 30 L49 28 L46 31 M54 34 L48 33", iris: 10, irisColor: "#c0200e", pupilRx: 1.8, pupilRy: 9, pupilX: 34.9, glint: 0.5, lid: "M4 15.2 L60 22.8 L60 0 L4 0 Z", brow: "M10 7.6 L56 17.4" },
    { sclera: "#ff8a2a", ring: "#ff3b1f", ringW: 2, veins: "M9 30 L15 28 L19 31 L21 29 M10 34 L16 33 L18 35 M55 30 L49 28 L45 31 L43 29 M54 34 L48 33 L46 35", iris: 11, irisColor: "#8a0808", pupilRx: 1.3, pupilRy: 11, pupilX: 35.8, glint: 0.3, lid: "M4 16.3 L60 26.4 L60 0 L4 0 Z", brow: "M10 7.1 L56 20.9" },
    { sclera: "#ff3b1f", ring: "#ffd23a", ringW: 2.5, veins: "", iris: 12, irisColor: "#ffd23a", pupilRx: 1, pupilRy: 13, pupilX: 36.8, glint: 0, lid: "M4 17.4 L60 30 L60 0 L4 0 Z", brow: "M10 6.6 L56 24.4" }
]

function Eyes({ angerCount }) {
    const eye = eyeLevels[angerCount]

    return (
        <div className="eyes" aria-hidden="true">
            <svg width="92" height="70" viewBox="0 0 64 48">
                <ellipse cx="32" cy="30" rx="24" ry="16" fill={eye.sclera} stroke={eye.ring} strokeWidth={eye.ringW} />
                <path d={eye.veins} stroke="#c0121a" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                <ellipse cx={eye.pupilX} cy="30" rx={eye.iris} ry={eye.iris} fill={eye.irisColor} />
                <ellipse cx={eye.pupilX} cy="30" rx={eye.pupilRx} ry={eye.pupilRy} fill="#0a0506" />
                <circle cx={eye.pupilX - 3} cy="26" r="1.6" fill="#ffffff" opacity={eye.glint} />
                <path d={eye.lid} fill="var(--display-bg)" />
                <path d={eye.brow} stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
            </svg>
            <svg width="92" height="70" viewBox="0 0 64 48">
                <g transform="translate(64 0) scale(-1 1)">
                    <ellipse cx="32" cy="30" rx="24" ry="16" fill={eye.sclera} stroke={eye.ring} strokeWidth={eye.ringW} />
                    <path d={eye.veins} stroke="#c0121a" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                    <ellipse cx={eye.pupilX} cy="30" rx={eye.iris} ry={eye.iris} fill={eye.irisColor} />
                    <ellipse cx={eye.pupilX} cy="30" rx={eye.pupilRx} ry={eye.pupilRy} fill="#0a0506" />
                    <circle cx={eye.pupilX - 3} cy="26" r="1.6" fill="#ffffff" opacity={eye.glint} />
                    <path d={eye.lid} fill="var(--display-bg)" />
                    <path d={eye.brow} stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
                </g>
            </svg>
        </div>
    )
}

export default Eyes
