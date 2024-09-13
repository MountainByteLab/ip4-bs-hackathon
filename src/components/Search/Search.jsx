import React from 'react';
import searchIcon from "../../assets/images/search.svg"; 
import "./Search.scss";


function Search( {searchTerm, setSearchTerm, showsList, setSearchedShow} ) {

    const handleSubmit = (event) => {
        event.preventDefault();
        let foundShow = showsList.find(show=>show.show_name.toLowerCase()===searchTerm.toLowerCase())
        console.log(foundShow)
        setSearchedShow(foundShow)
    }

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
                <img src={searchIcon} alt="Search Icon" onClick={handleSubmit} />
            </div>
    </div>
    );
}

export default Search;
