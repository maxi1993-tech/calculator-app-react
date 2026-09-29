import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher"
import "./_header.scss"

function Header() {
    return (
        <header className="header">
            <h1 className="header__title">calc</h1>

            <ThemeSwitcher />
        </header>
    )
}

export default Header
