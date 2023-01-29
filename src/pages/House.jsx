import { useParams } from "react-router-dom"
import Slideshow from "../components/Slideshow"
import housesData from "../data/houses.json"
import Collapse from "../components/Collapse"
import Rating from "../components/Rating"
import "../styles/house.css"

const housesList = JSON.parse(JSON.stringify(housesData))

function House() {
  const { houseID } = useParams()
  const house = housesList.find((houseElem) => houseElem.id === houseID)

  return (
    <main className="house-main">
      <Slideshow images={house.pictures} />

      <div className="house-infos">
        <div>
          <h1>{house.title}</h1>
          <h2>{house.location}</h2>

          <div className="house-tags">
            {house.tags.map((tag, index) => (
              <div key={index} className="tag">
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div className="house-profile">
          <div className="house-host">
            <h2>{house.host.name}</h2>
            <div className="host-picture">
              <img src={house.host.picture} alt={house.host.name} />
            </div>
          </div>

          <Rating rating={house.rating} />
        </div>
      </div>

      <div className="house-collapses">
        <Collapse title="Description" content={house.description} />
        <Collapse
          title="Équipement"
          content={
            <ul>
              {house.equipments.map((equipment, i) => (
                <li key={i}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </main>
  )
}

export default House
