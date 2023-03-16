import "./index.css"
import { useState } from "react"
import arrowRight from "../../assets/img/ArrowRight.png"

function Slideshow({ images }) {
  const [imageIndex, setimageIndex] = useState(0)
  return (
    <div className="slideshow">
      {images.length > 1 && (
        <button
          className="arrow-btn left"
          onClick={() =>
            setimageIndex(imageIndex > 0 ? imageIndex - 1 : images.length - 1)
          }
        >
          <img src={arrowRight} alt={"left"} />
        </button>
      )}

      <img src={images[imageIndex]} alt={images[imageIndex]} />
      <span className="slide-index">
        {imageIndex + 1}/{images.length}
      </span>

      {images.length > 1 && (
        <button
          className="arrow-btn right"
          onClick={() => setimageIndex((imageIndex + 1) % images.length)}
        >
          <img src={arrowRight} alt={"right"} />
        </button>
      )}
    </div>
  )
}

export default Slideshow
