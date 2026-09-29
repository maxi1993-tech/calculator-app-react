import "./_theme-switcher.scss"

function ThemeSwitcher() {

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

                    <input
                        className="theme-switcher__option"
                        type="radio"
                        id="theme-dark"
                        name="theme"
                        value="dark"
                        defaultChecked
                    />

                    <label
                        className="sr-only"
                        htmlFor="theme-light"
                    >
                        Light theme
                    </label>

                    <input
                        className="theme-switcher__option"
                        type="radio"
                        id="theme-light"
                        name="theme"
                        value="light"
                    />

                    <label
                        className="sr-only"
                        htmlFor="theme-purple"
                    >
                        Purple theme
                    </label>

                    <input
                        className="theme-switcher__option"
                        type="radio"
                        id="theme-purple"
                        name="theme"
                        value="purple"
                    />
                </div>
            </div>
        </fieldset>
    )
}

export default ThemeSwitcher
