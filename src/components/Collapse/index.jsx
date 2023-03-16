import arrowUp from "../../assets/img/ArrowUp.png"
import { useState } from "react"
import "./index.css"

function Collapse({ title, content }) {
  const [opened, setOpened] = useState(false)
  return (
    <div className={`collapse ${opened ? "open" : "close"}`}>
      <div className="collapse-title" onClick={() => setOpened(!opened)}>
        <span>{title}</span>
        <img src={arrowUp} alt={"arrow"} className="collapse-arrow" />
      </div>
      <div className="collapse-content">{content}</div>
    </div>
  )
}

export default Collapse
