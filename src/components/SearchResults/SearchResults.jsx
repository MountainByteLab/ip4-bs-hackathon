import Card from "../Card/Card";
import "./SearchResults.scss"

function SearchResults({searchedShow, listFunction}) {
    
    return (
        searchedShow && <section className="search-results">
            <h2 className="search-results__heading">Search Results</h2>
            <Card searchedShow={searchedShow} listFunction={listFunction} />
        </section>
    );
}

export default SearchResults;
