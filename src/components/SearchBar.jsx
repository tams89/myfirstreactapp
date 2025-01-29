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
            backgroundImage: 'url(https://source.unsplash.com/random)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            p: 3, 
            '& > :not(style)': { m: 1 } 
        }} noValidate autoComplete="off">
            <ToggleButtonGroup value={searchType} exclusive onChange={handleSearchType} aria-label="search type">
                <ToggleButton value="bestmatch" aria-label="Best Match" title="Best Match">Best Match</ToggleButton>
                <ToggleButton value="highrated" aria-label="Highest Rated" title="Highest Rated">Highest Rated</ToggleButton>
                <ToggleButton value="mostreviewed" aria-label="Most Reviewed" title="Most Reviewed">Most Reviewed</ToggleButton>
            </ToggleButtonGroup>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <TextField id="outlined-business" label="Business" variant="outlined" sx={{ flex: 1, m: 1 }} />
                <TextField id="outlined-where" label="Where?" variant="outlined" sx={{ flex: 1, m: 1 }} />
                <Button type="submit" variant="contained" color="primary" sx={{ m: 1 }}>Cure my ravenousnous!</Button>
            </Box>
        </Box>
    );
};

export default SearchBar;
