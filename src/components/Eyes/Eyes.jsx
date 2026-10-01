import "./_eyes.scss"

function Eyes() {

    return (
        <div className="eyes" aria-hidden="true">
            <svg width="92" height="70" viewBox="0 0 64 48">
                <ellipse cx="32" cy="30" rx="24" ry="16" fill="#ffffff" />
                <ellipse cx="32" cy="30" rx="8" ry="8" fill="#3b4a6b" />
                <ellipse cx="32" cy="30" rx="4.5" ry="4.5" fill="#0a0506" />
                <circle cx="29" cy="26" r="1.6" fill="#ffffff" />
                <path d="M4 12 L60 12 L60 0 L4 0 Z" fill="var(--display-bg)" />
                <path d="M10 9 L56 7" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
            </svg>
            <svg width="92" height="70" viewBox="0 0 64 48">
                <g transform="translate(64 0) scale(-1 1)">
                    <ellipse cx="32" cy="30" rx="24" ry="16" fill="#ffffff" />
                    <ellipse cx="32" cy="30" rx="8" ry="8" fill="#3b4a6b" />
                    <ellipse cx="32" cy="30" rx="4.5" ry="4.5" fill="#0a0506" />
                    <circle cx="29" cy="26" r="1.6" fill="#ffffff" />
                    <path d="M4 12 L60 12 L60 0 L4 0 Z" fill="var(--display-bg)" />
                    <path d="M10 9 L56 7" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
                </g>
            </svg>
        </div>
    )
}

export default Eyes
