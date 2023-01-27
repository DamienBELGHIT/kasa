import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import "../styles/collapse.css"

function Collapse({ title, content }) {
  const [opened, setOpened] = useState(false)
  return (
    <div className={`collapse ${opened ? "open" : "close"}`}>
      <div className="collapse-title" onClick={() => setOpened(!opened)}>
        <span>{title}</span>
        <FontAwesomeIcon icon={opened ? faChevronUp : faChevronDown} />
      </div>
      <p>{content}</p>
    </div>
  )
}

export default Collapse
