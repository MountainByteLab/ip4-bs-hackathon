import trash from "../../assets/images/trash.svg"
import "./Card.scss"

function Card({provider, show, added=false}) {
  return (
    <div className="card">
      <img className="card__provider" src={provider} alt="Provider Logo" />
      <img className="card__show" src={show} alt="Show Poser" />
      {added ? <img className="card__button card__button--trash" src={trash}/> : <button className="card__button" type="button">Add</button>}
    </div>
  )
}

export default Card