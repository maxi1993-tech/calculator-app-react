import { useState, useEffect } from "react"
import "./_theme-switcher.scss"


function ThemeSwitcher() {
    const [theme, setTheme] = useState(document.documentElement.dataset.theme)

    useEffect(() => {
        document.documentElement.dataset.theme = theme
    }, [theme])

    function handleThemeChange(event) {
        const value = event.target.value
        setTheme(value)
        localStorage.setItem("theme", value)
    }

    return (
        <fieldset className="theme-switcher">
            <legend className="sr-only">Choose theme</legend>

            <span
                className="theme-switcher__label"
                aria-hidden="true"
            >
                Theme
            </span>

            <div className="theme-switcher__selector">
                <div
                    className="theme-switcher__numbers"
                    aria-hidden="true"
                >
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </div>

                <div className="theme-switcher__options">
                    <label
                        className="sr-only"
                        htmlFor="theme-dark"
                    >
                        Dark theme
                    </label>

                    <input onChange={handleThemeChange}
                        className="theme-switcher__option"
                        type="radio"
                        id="theme-dark"
                        name="theme"
                        value="dark"
                        checked={theme === "dark"}
                    />

                    <label
                        className="sr-only"
                        htmlFor="theme-light"
                    >
                        Light theme
                    </label>

                    <input onChange={handleThemeChange}
                        className="theme-switcher__option"
                        type="radio"
                        id="theme-light"
                        name="theme"
                        value="light"
                        checked={theme === "light"}
                    />

                    <label
                        className="sr-only"
                        htmlFor="theme-purple"
                    >
                        Purple theme
                    </label>

                    <input onChange={handleThemeChange}
                        className="theme-switcher__option"
                        type="radio"
                        id="theme-purple"
                        name="theme"
                        value="purple"
                        checked={theme === "purple"}
                    />
                </div>
            </div>
        </fieldset>
    )
}

export default ThemeSwitcher
