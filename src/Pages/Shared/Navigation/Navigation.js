import React from 'react';

import { Container, Navbar } from 'react-bootstrap';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            < Navbar className="nav-color  bg-gradient" variant="dark" sticky="top" collapseOnSelect expand="lg" style={{backgroundColor:'rgb(3, 3, 70)'}} >
                <Container>
                    <Navbar.Brand href="/home">Car Genious</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="header justify-content-end">
                        <div class="btn-group me-3">
                            <button type="button" class="btn" style={{backgroundColor:'#a08fc3'}}> <NavHashLink style={{ color: 'white', textDecoration: 'none' }} activeStyle={{ color: 'white' }} to="/home">Home</NavHashLink></button>
                        </div>
                        <button type="button" class="btn me-3" style={{backgroundColor:'#a08fc3'}}> <NavHashLink style={{ color: 'white', textDecoration: 'none' }} activeStyle={{ color: 'white' }} to="/specialoffer">Special Offer</NavHashLink></button>
                        {/* <button type="button" class="btn me-3" style={{backgroundColor:'#a08fc3'}}> <NavHashLink style={{ color: 'white', textDecoration: 'none' }} activeStyle={{ color: 'white' }} to="/contact">Contact</NavHashLink></button> */}
                        {user?.displayName && <button type="button" class="btn me-3" style={{backgroundColor:'#a08fc3'}}> <NavHashLink style={{ color: 'white', textDecoration: 'none' }} activeStyle={{ color: 'white' }} to="/dashboard">Dashboard</NavHashLink></button>}
                        {user?.displayName && <Navbar.Text>
                            Signed in as: <a className="me-3" href="#login">{user?.displayName}</a>
                        </Navbar.Text>}
                        {
                            user?.displayName ?
                                <button onClick={logout} className="btn btn-light">LogOut</button> :
                                <button type="button" class="btn" style={{backgroundColor:'#a08fc3'}}> <NavHashLink style={{ color: 'dark', textDecoration: 'none' }} activeStyle={{ color: 'dark' }} to="/login">Login</NavHashLink></button>
                        }
                    </Navbar.Collapse >
                </Container >
            </Navbar >
        </div >
    );
};

export default Navigation;