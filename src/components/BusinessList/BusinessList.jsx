/* eslint-disable react/prop-types */
import React from 'react';
import Business from '../Business/Business';
import { Box } from '@mui/material';

const BusinessList = ({items}) => {

    return (
        <Box sx={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(20%, 100%), 1fr))', gap: 10, p: 1 }}>
            {items.map((business, index) => (
                <Business key={index} business={business} />
            ))}
        </Box>
    );
};

export default BusinessList;
