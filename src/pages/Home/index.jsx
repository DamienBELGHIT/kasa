import Banner from "../../components/Banner"
import bannerImg from "../../assets/img/banner.png"
import "./index.css"
import housesData from "../../data/houses.json"
import { Link } from "react-router-dom"
import Card from "../../components/Card"

const housesList = JSON.parse(JSON.stringify(housesData))

function Home() {
  return (
    <main>
      <Banner image={bannerImg} description="Chez vous, partout et ailleurs" />
      <ul className="card-container">
        {housesList &&
          housesList.map((house, index) => (
            <li key={`house-${house.id}`}>
              <Link to={`/house/${house.id}`}>
                <Card
                  key={`${house.name}-${index}`}
                  title={house.title}
                  cover={house.cover}
                />
              </Link>
            </li>
          ))}
      </ul>
    </main>
  )
}

export default Home
