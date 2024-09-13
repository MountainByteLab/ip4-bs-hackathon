
import Card from "../Card/Card"
import "./Shelf.scss"

function Shelf({collection, listFunction}) {
  return (
    <div className="shelf">
      {collection.map(show=><Card key={show.id} searchedShow={show} listFunction={listFunction} added={true} />)}
    </div>
  )
}

export default Shelf;