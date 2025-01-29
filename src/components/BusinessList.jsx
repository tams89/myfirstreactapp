import React from 'react';
import Business from './Business';
import BusinessModel from '../models/Business';

const businesses = [
    new BusinessModel(
        'https://via.placeholder.com/150',
        'Business One',
        '123 Business St',
        'Business City',
        'BS',
        '12345',
        'Category One',
        4.5,
        90
    ),
    new BusinessModel(
        'https://via.placeholder.com/150',
        'Business Two',
        '456 Business Ave',
        'Business Town',
        'BT',
        '67890',
        'Category Two',
        4.0,
        120
    ),
    // Add more businesses as needed
];

const BusinessList = () => {
    return (
        <span>
            {businesses.map((business, index) => (
                <Business key={index} business={business} />
            ))}
        </span>
    );
};

export default BusinessList;
