import React from 'react';
import { Card, CardContent, CardActionArea, CardMedia, Typography, Grid2 } from '@mui/material';

const Business = ({ business, key }) => {
    const [selectedCard, setSelectedCard] = React.useState(0);
    return (
        <Card variant='outline' sx={{ maxWidth: 345, height: '100%' }}>
            <CardActionArea
                onClick={() => setSelectedCard(key)}
                data-active={selectedCard === key ? '' : undefined}
                sx={{
                    backgroundColor: 'rgba(255,255,255,0.80)',
                    outline: 'none',
                    height: '100%',
                    '&[data-active]': {
                        '&:hover': {
                            backgroundColor: 'action.selectedHover',
                        },
                    },
                }}
            >
                <CardContent sx={{ height: '95%', p: 1 }}>
                    <CardMedia component="img" sx={{ objectFit: "cover" }} image={business.image} alt={business.name} />
                    <br />
                    <Typography variant="h5" component="div">{business.name}</Typography>
                    <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid2 size={6}>
                            <Typography variant="body2" color="text.secondary">
                                <strong>Address: </strong><br />
                                {business.address}<br />
                                {business.city}, {business.state} {business.zipcode}
                            </Typography>
                        </Grid2>
                        <Grid2 size={6}>
                            <Typography variant="body2" color="text.secondary"><strong>Category:</strong> {business.category}</Typography>
                            <Typography variant="body2" color="text.secondary"><strong>Rating:</strong> {business.rating}</Typography>
                            <Typography variant="body2" color="text.secondary"><strong>Reviews:</strong> {business.reviewCount}</Typography>
                        </Grid2>
                    </Grid2>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default Business;
