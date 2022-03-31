import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import login from '../../../images/login.jpg'
import { NavLink, useLocation, useHistory } from 'react-router-dom';

import Navigation from '../../Shared/Navigation/Navigation';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

// import Footer from '../../Shared/Footer/Footer';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div className='div-bg bg-gradient' style={{color:'whitesmoke'}}>
            <Navigation></Navigation>
            <Container className='container'>

                <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{textAlign:'start', marginTop:'90px',fontSize:'20px'}}>
                        <p><span style={{fontSize:'30px', color:'red'}}>&#10003;</span>Login and registration features</p>
                        <p><span style={{fontSize:'30px', color:'red'}}>&#10003;</span>Social Authentication via Facebook and Google</p>
                        <p><span style={{fontSize:'30px', color:'red'}}>&#10003;</span>Reset forgotten passwords</p>
                        <p><span style={{fontSize:'30px', color:'red'}}>&#10003;</span>Moderation</p>
                    </Grid>
                    <Grid item sx={{ mt: 8, backgroundColor:'white' }} xs={12} md={6} className='login-box'>
                        <Typography sx={{ fontWeight: 600, m: 5,color:'black' }} variant="h3">
                            User Login
                        </Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                onChange={handleOnChange}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                variant="standard" />
                                <br />

                            <Button sx={{ m: 1,backgroundColor:'blueviolet' }} type="submit" variant="contained">Login</Button>
                            <br />
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/register">
                                <Button variant="text">New User? Please Register</Button>
                            </NavLink>
                            {isLoading && <CircularProgress />}
                            {user?.email && <Alert severity="success">Login successfully!</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>}
                        </form>
                        <p>------------------------</p>
                        <Button className='bg-gradient' onClick={handleGoogleSignIn} variant="contained" style={{backgroundColor:'blueviolet', marginBottom:'10px'}}>Google Sign In</Button>
                    </Grid>
                   
                </Grid>
            </Container>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Login;