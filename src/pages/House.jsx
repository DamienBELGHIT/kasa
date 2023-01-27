import { useParams } from "react-router-dom"
import Slideshow from "../components/Slideshow"
import housesData from "../data/houses.json"

const housesList = JSON.parse(JSON.stringify(housesData))

function House() {
  const { houseID } = useParams()
  const house = housesList.find((houseElem) => houseElem.id === houseID)
  return (
    <main>
      <Slideshow images={house.pictures} />
      <div>House {houseID}</div>
    </main>
  )
}

export default House
