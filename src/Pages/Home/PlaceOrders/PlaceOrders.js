import React, { useRef, useState } from 'react';

import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Navigation from '../../Shared/Navigation/Navigation';
import useAuth from '../../../hooks/useAuth';

const PlaceOrders = (props) => {
    const { id, img, name, description, price } = props?.details || {};
    console.log(img)

    const { user } = useAuth();
    // console.log(name);
    const addressRef = useRef();
    const quantityRef = useRef();
    // const [status, setStatus] = useState('false');

    const handleAddUser = e => {
        const address = addressRef.current.value;
        const quantity = quantityRef.current.value;

        const newUser = { id, img, name, description, price, address, quantity, userEmail, userName };
        fetch('https://young-harbor-45330.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('User added Successfully.')
                    e.target.reset();
                    console.log(data)
                }
            })
        e.preventDefault();
    }

    // need to sent user email
    const userEmail = user?.email;
    const userName = user?.displayName;

    return (
        <>
            <Navigation />
            <form onSubmit={handleAddUser}>
                <Box display="flex"
                    justifyContent="center"
                    alignItems="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 685, mb: 5, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <CardMedia
                                component="img"
                                height="100%"
                                image={img}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {name}
                                </Typography>
                             
                                <Typography variant="body2" color="text.secondary">
                                    {description}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    Price: ${price}
                                </Typography>

                                <TextField
                                    sx={{
                                        width: '70%',
                                        m: 3
                                    }}
                                    required
                                    id="outlined-required"
                                    label="Shipping Address"
                                    inputRef={addressRef}
                                />
                                <TextField
                                    sx={{
                                        width: '70%',
                                        m: 3
                                    }}
                                    required
                                    id="outlined-required"
                                    label="Quantity"
                                    inputRef={quantityRef}
                                />
                                <Button sx={{ mb: 2 }} type="submit" variant="contained">Add Product</Button>

                            </CardContent>

                        </Card>

                    </Grid>

                </Box>
            </form>
        </>
    );
};

export default PlaceOrders;