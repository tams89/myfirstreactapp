import React from 'react';
import BusinessModel from '../models/Business';

const business = new BusinessModel(
    'https://via.placeholder.com/150',
    'Business Name',
    '123 Business St',
    'Business City',
    'BS',
    '12345',
    'Category',
    4.5,
    90
);

const Business = () => {
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
