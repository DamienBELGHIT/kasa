import { Outlet, Link } from "react-router-dom"
import logo from "../assets/img/logo.png"
import "../styles/base.css"
import "../styles/header.css"
import "../styles/footer.css"
import { useLocation } from "react-router-dom"

function Layout() {
  const location = useLocation()
  return (
    <div>
      <header>
        <img src={logo} alt="Logo" />
        <nav>
          <ul>
            <li className={location.pathname === "/" ? "selected" : undefined}>
              <Link to="/">Accueil</Link>
            </li>
            <li
              className={
                location.pathname === "/a-propos" ? "selected" : undefined
              }
            >
              <Link to="/a-propos">A propos</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />

      <footer>
        <img src={logo} alt="Logo" />
        <span>© 2020 Kasa. All rights reserved</span>
      </footer>
    </div>
  )
}

export default Layout
