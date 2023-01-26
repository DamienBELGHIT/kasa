import { useParams } from "react-router-dom"

function House() {
  const { houseID } = useParams()
  return (
    <main>
      <div>House {houseID}</div>
    </main>
  )
}

export default House
