import trash from "../../assets/images/trash.svg";
import "./Card.scss";

function Card({ searchedShow, listFunction, added = false }) {
  return (
    <div className="card">
      <img
        className="card__provider"
        src={
          !searchedShow
            ? "https://placehold.co/128x163/black/black/svg?text=None"
            : searchedShow.provider_logo
        }
        alt="Provider Logo"
      />
      <img
        className="card__show"
        src={
          !searchedShow
            ? "https://placehold.co/128x163/black/black/svg?text=None"
            : searchedShow.show_poster
        }
        alt="Show Poster"
      />
      {added ? (
        <img
          className="card__button card__button--trash"
          src={trash}
          onClick={() => listFunction(searchedShow.id)}
        />
      ) : (
        <button
          className="card__button"
          type="button"
          onClick={() => listFunction(searchedShow)}
        >
          Add
        </button>
      )}
    </div>
  );
}

export default Card;
