import "./index.css"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

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
          <FontAwesomeIcon icon={faChevronLeft} />
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
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      )}
    </div>
  )
}

export default Slideshow
