import "./nav.css"
import "./nav__list.css"
import "./nav__link.css"
import "./nav__list-item.css"

export const Nav = () => {
    return <nav className="nav">
        <ul className="nav__list">
            <li className="nav__list-item"><a className="nav__link" href="#projects" >Проекты 🚀</a></li>
            <li className="nav__list-item"><a className="nav__link" href="#contact">Написать мне 🤙</a></li>
        </ul>
    </nav>
}