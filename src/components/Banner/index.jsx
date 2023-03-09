import "./index.css"

function Banner({ image, description }) {
  return (
    <div className={`banner${description ? " banner-small" : ""}`}>
      <img src={image} alt="banner" className={description && "fade"} />
      {description && (
        <div className="banner-shade">
          <h1>{description}</h1>
        </div>
      )}
    </div>
  )
}

export default Banner
