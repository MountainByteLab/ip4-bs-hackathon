import Shelf from "../Shelf/Shelf";
import "./Collection.scss";

function Collection({collection, listFunction}) {
    return (
        <section className="collection">
            <h2 className="collection__heading">Your Collection</h2>
            <Shelf collection={collection} listFunction={listFunction}/>
            <button className="collection__button" type="button">Checkout</button>
        </section>
    );
}

export default Collection;
