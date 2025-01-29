import React from 'react';
import { Button, TextField, Box, ToggleButtonGroup, ToggleButton } from '@mui/material';

const SearchBar = () => {
    const [searchType, setAlignment] = React.useState('bestmatch');

    const handleSearchType = (event, newSearchType) => {
        setAlignment(newSearchType);
    };

    return (
        <Box component="form" sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            backgroundImage: "url('https://www.foodandwine.com/thmb/K9zYrbzvWUqU8B2BfDF3ht4tNU8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/short-rib-chili-with-pickled-red-onion-FT-RECIPE0222-2-cb71113b52c14256b7686e70cefa0a2e.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            p: 3,
            '& > :not(style)': { m: 1 }
        }} noValidate autoComplete="off">
            <ToggleButtonGroup sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
            }} value={searchType} exclusive onChange={handleSearchType} aria-label="search type">
                <ToggleButton value="bestmatch" aria-label="Best Match" title="Best Match">Best Match</ToggleButton>
                <ToggleButton value="highrated" aria-label="Highest Rated" title="Highest Rated">Highest Rated</ToggleButton>
                <ToggleButton value="mostreviewed" aria-label="Most Reviewed" title="Most Reviewed">Most Reviewed</ToggleButton>
            </ToggleButtonGroup>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '75%' }}>
                <TextField id="outlined-business" label="Business" variant="outlined" sx={{ flex: 1, m: 1, backgroundColor: 'rgba(255, 255, 255, 0.95)' }} />
                <TextField id="outlined-where" label="Where?" variant="outlined" sx={{ flex: 1, m: 1, backgroundColor: 'rgba(255, 255, 255, 0.95)' }} />
                <div>
                    <Button type="submit" variant="contained" color="primary" sx={{ m: 1, backgroundColor: 'goldenrod' }}>Cure my ravenousnous!</Button>
                </div>
            </Box>
        </Box>
    );
};

export default SearchBar;
