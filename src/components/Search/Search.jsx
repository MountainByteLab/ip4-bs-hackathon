import React from 'react';
import searchIcon from "../../assets/images/search.svg"; 
import "./Search.scss";


function Search({ searchTerm, setSearchTerm, filteredShows, addShowToCollection }) {
    return (
        <div className="search-bar-container">
            <h2>Step 1: Search Stream what you like</h2>
            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder="Search" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
                <button type="submit">
                    <img src={searchIcon} alt="Search Icon" />
                </button>
            </div>


            <div className="results-section">
                <h2>Search Result</h2>
                {filteredShows.map((show) => (
                    <div key={show.id} className="search-result-card">
                        <p>{show.provider}</p>
                        <p>{show.show_name}</p>
                        <button onClick={() => addShowToCollection(show)}>Add</button>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Search;
