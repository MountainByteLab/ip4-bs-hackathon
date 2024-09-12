import "./Search.scss"

function Search() {
    return (
        <div className="search">
            <h1 className="search__header">
                Search for your favorite shows
            </h1>
            <input
                type="text"
                name="shows"
                id="shows"
                className="search__search"
                placeholder="Search"
            />
        </div>
    );
}

export default Search;
