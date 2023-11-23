// ServiceProviderHome.js
import React from 'react';
import { Container, Typography, Button, Grid, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const ServiceProviderHome = () => {
    return (
        <Container>
            <Typography variant="h4" component="h1" mt={4} mb={4}>
                Welcome, Service Provider!
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <Typography variant="h6" component="h2" mb={2}>
                            Add Your Resort
                        </Typography>
                        {/* Add Resort Form or Component */}
                        {/* Example Button to Add Resort */}
                        <Button variant="contained" startIcon={<AddIcon />} color="primary">
                            Add Resort
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <Typography variant="h6" component="h2" mb={2}>
                            Add Your Lodging
                        </Typography>
                        {/* Add Lodging Form or Component */}
                        {/* Example Button to Add Lodging */}
                        <Button variant="contained" startIcon={<AddIcon />} color="primary">
                            Add Lodging
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ServiceProviderHome;
