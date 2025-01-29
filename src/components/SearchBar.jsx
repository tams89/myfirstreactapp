import React from 'react';

const SearchBar = ({ searchTerms, selectedLocation }) => {
    return (
        <span>
            <span>Best Match</span>
            <span>Highest Rated</span>
            <span>Most Reviewed</span>
            <div>
                <input type="text" placeholder='Businesses' value={searchTerms} />
                <input type="text" placeholder='Where?' value={selectedLocation} />
                <button title='Cure my ravenousnous!'></button>
            </div>
        </span>
    );
};

export default SearchBar;
