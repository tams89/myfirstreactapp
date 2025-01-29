import React from 'react';

const Business = ({ business }) => {
    return (
        <div>
            <h1>{business.name}</h1>
            <img src={business.image} alt={business.name} />
            <p>{business.address}</p>
            <p>{business.city}, {business.state} {business.zipcode}</p>
            <p>Category: {business.category}</p>
            <p>Rating: {business.rating}</p>
            <p>Reviews: {business.reviewCount}</p>
        </div>
    );
};

export default Business;
