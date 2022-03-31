import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import PlaceOrders from '../../PlaceOrders/PlaceOrders';
let spinner = true;

const Purchase = () => {
    const { detailId } = useParams();
    const id = parseInt(detailId);
    console.log(id)
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://young-harbor-45330.herokuapp.com/services')
        
            .then(res => res.json())
            .then(data => setServices(data));
        if (services) {
            spinner = false;
        }
    }, []);

    if (spinner) {
        return <div className="d-flex justify-content-center my-3"><Spinner animation="border" variant="danger" /></div>
    }

    const details = services.find(detail => detail.id === id)
    return (
        <div>
            {
               <PlaceOrders details={details}></PlaceOrders>
            }
        </div>
    );
};

export default Purchase;