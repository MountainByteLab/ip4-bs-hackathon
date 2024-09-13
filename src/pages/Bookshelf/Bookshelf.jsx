import Collection from "../../components/Collection/Collection";
import Search from "../../components/Search/Search";
import SiteHeader from "../../components/SiteHeader/SiteHeader";
import SearchResults from "../../components/SearchResults/SearchResults";
import "./Bookshelf.scss";

function Bookshelf() {
    return (
        <section className="bookshelf">
            <SiteHeader />
            <Search />
            <section className="bookshelf__section">
                <SearchResults />
                <Collection />
            </section>
        </section>
    );
}

export default Bookshelf;
