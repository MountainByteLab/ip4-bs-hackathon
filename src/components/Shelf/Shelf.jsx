import Card from "../Card/Card"
import NetFlixLogo from "../../assets/images/Netflix_N_logo.svg"
import placeholder2 from "../../assets/images/placeholder2.png"
import placeholder3 from "../../assets/images/placeholder3.png"
import placeholder4 from "../../assets/images/placeholder4.png"
import placeholder5 from "../../assets/images/placeholder5.png"
import placeholder6 from "../../assets/images/placeholder6.png"

import "./Shelf.scss"

function Shelf() {
  return (
    <div className="shelf">
        <Card provider={NetFlixLogo} show={placeholder2} added={true} />
        <Card provider={NetFlixLogo} show={placeholder3} added={true} />
        <Card provider={NetFlixLogo} show={placeholder4} added={true} />
        <Card provider={NetFlixLogo} show={placeholder5} added={true} />
        <Card provider={NetFlixLogo} show={placeholder6} added={true} />
    </div>
  )
}

export default Shelf