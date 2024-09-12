import React from 'react';
import searchIcon from "../../assets/images/search.svg"; 


function Search({ searchTerm, setSearchTerm }) {
    return (
        <div className="search-bar-container">
            <h2>Search Stream what you like</h2>
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
        </div>
    );
}

export default Search;
