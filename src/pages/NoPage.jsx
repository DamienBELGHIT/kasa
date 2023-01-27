import { Link } from "react-router-dom"
import "../styles/nopage.css"

const NoPage = () => {
  return (
    <main>
      <h1 className="error-title">404</h1>
      <h2 className="error-subtitle">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link className="error-link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </main>
  )
}

export default NoPage
