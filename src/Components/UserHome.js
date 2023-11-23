// UserHome.js
import React from 'react';
import { Container, Typography, Card, CardContent, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const UserHome = () => {
    return (
        <Container>
            <Typography variant="h4" component="h1" mt={4} mb={4}>
                Welcome, User!
            </Typography>

            <Card elevation={3} sx={{ p: 2, mb: 2 }}>
                <CardContent>
                    <Typography variant="h6" component="h2" mb={2}>
                        Explore Resorts and Lodgings
                    </Typography>
                    {/* Display Available Resorts and Lodgings */}
                    {/* Example Button to Search Resorts and Lodgings */}
                    <Button variant="contained" startIcon={<SearchIcon />} color="primary">
                        Search Resorts and Lodgings
                    </Button>
                </CardContent>
            </Card>
        </Container>
    );
};

export default UserHome;
