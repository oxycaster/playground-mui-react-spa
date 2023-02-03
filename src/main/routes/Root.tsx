import React from 'react';
import {Button, Container, Grid} from "@mui/material";

export const Root = () => {
    return (
        <Container maxWidth="sm">
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <div>Hello world!!!!</div>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="text">Text</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained">Contained</Button>
                </Grid>
                <Grid item xs={8}>
                    <Button variant="outlined">Outlined</Button>
                </Grid>
            </Grid>
        </Container>
    );
};
