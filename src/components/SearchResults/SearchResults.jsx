import Card from "../Card/Card";
import placeholder1 from "../../assets/images/placeholder1.png"
import NetflixLogo from "../../assets/images/Netflix_N_logo.svg"
import "./SearchResults.scss"

function SearchResults({searchedShow, listFunction}) {
    
    return (
        <section className="search-results">
            <h2 className="search-results__heading">Search Results</h2>
            <Card searchedShow={searchedShow} listFunction={listFunction} />
        </section>
    );
}

export default SearchResults;
