import banner from "../assets/img/banner.png"
import "../styles/home.css"

function Home() {
  return (
    <main>
      <div className="banner">
        <img src={banner} alt="banner" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </main>
  )
}

export default Home
