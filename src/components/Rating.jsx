import star from "../assets/img/star.png"
import starEmpty from "../assets/img/starEmpty.png"

function Rating({ rating }) {
  const stars = []
  const RATINGS_MAX = 5
  for (let i = 0; i < RATINGS_MAX; i++) {
    stars.push(
      <img
        key={i}
        icon="fa-solid fa-star-sharp"
        src={rating > i ? star : starEmpty}
        alt="rating"
      />
    )
  }
  return <div>{stars}</div>
}

export default Rating
