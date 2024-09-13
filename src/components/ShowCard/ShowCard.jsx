// ShowCard.jsx
import React from 'react';

function ShowCard({ show, addShowToCollection, isAdded }) {
    return (
        <div className="show-card">
            <p>{show.provider}</p>
            <p>{show.show_name}</p>
            <button 
                onClick={() => addShowToCollection(show)} 
                disabled={isAdded}
            >
                {isAdded ? 'Added' : 'Add'}
            </button>
        </div>
    );
}

export default ShowCard;
