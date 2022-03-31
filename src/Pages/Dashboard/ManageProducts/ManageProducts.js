import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

let spinner = true;

const ManageProducts = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://young-harbor-45330.herokuapp.com/services')
        fetch('')
            .then(res => res.json())
            .then(data => setServices(data))
        if (services) {
            spinner = false;
        }
    }, [])

    if (spinner) {
        return <div className="d-flex justify-content-center my-3"><Spinner animation="border" variant="danger" /></div>
    }
    // delete an user
    const handleDeleteOrder = id => {
        console.log(id);
        const proceed = window.confirm('Are you sure you want to delete?');

        if (proceed) {
            const url = `https://young-harbor-45330.herokuapp.com/services/${id}`
            console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingServices = services.filter(user => user._id !== id)
                        setServices(remainingServices);
                    }
                });
        }
    }
    return (
        <Box>
            <Typography sx={{ fontWeight: 600, m: 5 }} variant="h3">
                Manage Products
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    services.map(item => <Grid item xs={4} sm={4} md={4}>
                        <Card sx={{ minWidth: 275, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <img className='card-img' src={item.img} alt="" />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                                <Button className='btn-booking bg-gradiant' sx={{ mt: 2 , backgroundColor:'blueviolet'}} type="submit" variant="contained" onClick={() => handleDeleteOrder(item._id)}>Delete Product</Button>
                            </CardContent>

                        </Card>
                    </Grid>)
                }
            </Grid>
        </Box>
    );
};

export default ManageProducts;