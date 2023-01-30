import "../styles/banner.css"

function Banner({ image, description, classes }) {
  return (
    <div className={`banner${classes ? " " + classes : ""}`}>
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
