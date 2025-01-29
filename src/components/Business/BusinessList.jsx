import React from 'react';
import Business from './Business';
import BusinessModel from '../../models/Business';
import { Box } from '@mui/material';

const BusinessList = () => {
    const businesses = [
        new BusinessModel(
            'https://www.hot-dinners.com/images/stories/features/2020/ott/amazonico.jpg',
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
            'https://media.cntraveller.com/photos/611bf740704875486571a300/4:3/w_2664,h_1998,c_limit/duck-waffle-conde-nast-traveller-17june21-pr.jpg',
            'Business Two',
            '456 Business Ave',
            'Business Town',
            'BT',
            '67890',
            'Category Two',
            4.0,
            120
        ),
        new BusinessModel(
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSRqs9h9PiNCBiW8Jq7jNNiJ63A3nQ8QIWw&s',
            'Business Three',
            'A Business Ave',
            'A Business Town',
            'BX',
            '58974',
            'Category Three',
            5.0,
            1000000
        ),
        // Add more businesses as needed
    ];

    return (
        <Box sx={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(20%, 100%), 1fr))', gap: 10, p: 1 }}>
            {businesses.map((business, index) => (
                <Business key={index} business={business} />
            ))}
        </Box>
    );
};

export default BusinessList;
