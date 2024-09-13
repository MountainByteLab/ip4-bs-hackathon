import Collection from "../../components/Collection/Collection";
import Search from "../../components/Search/Search";
import SiteHeader from "../../components/SiteHeader/SiteHeader";
import SearchResults from "../../components/SearchResults/SearchResults";
import "./Bookshelf.scss";
import showsList from "../../../data/dummy_shows.json"
import { useState } from "react";

function Bookshelf() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchedShow, setSearchedShow] = useState(null);
    const [collection, setCollection] = useState([])

    function addToCollection(show){
        if (collection.find(shows=>shows.id === show.id)) return;
        setCollection(prevCollection=>[...collection,show])
        console.log("Added Show "+show.show_name)
    }

    function deleteFromCollection(id){
        setCollection(collection.filter(show=>show.id !== id))
        console.log("Deleted Show id #"+id)
    }

    return (
        <section className="bookshelf">
            <SiteHeader />
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} showsList={showsList} setSearchedShow={setSearchedShow} />
            <section className="bookshelf__section">
                <SearchResults searchedShow={searchedShow} listFunction={addToCollection} />
                <Collection collection={collection} listFunction={deleteFromCollection} />
            </section>
        </section>
    );
}

export default Bookshelf;
