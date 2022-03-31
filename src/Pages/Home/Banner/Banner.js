import { Carousel } from 'react-bootstrap';
import React from 'react';
import img1 from '../../../images/car-1.png'
import img2 from '../../../images/car-2.png'
import img3 from '../../../images/car-3.png'
import './Banner.css'

const Banner = () => {
    return (
      <>
                <Carousel>
                    <Carousel.Item className='container' >
                        <div className="row align-items-center text-black carousel">
                            <div className="col-lg-7 ps-5">
                                <h1 style={{ color: '#0d6efd' }}>AUDI Rs-6</h1>
                                <p className='ms-5' style={{textAlign:'justify'}}>The Audi RS 6 is a high-performance variant of the Audi A6 range, produced by the high-performance subsidiary company Audi Sport GmbH. Top speed is limited to 155mph, unless you opt for the Dynamic pack which raises the limiter to 174mph.</p>
                                <p className='text-center ms-5'>Starting at 1.59 core BDT</p>
                            </div>
                            <div className="col-lg-5 ps-2 img-container">
                                <img src='https://purepng.com/public/uploads/large/blue-edition-audi-luxury-car-vxt.png' alt="..." />
                            </div>
                        </div>
                    
                    </Carousel.Item>
                    <Carousel.Item className='container'>
                    
                        <div className="row align-items-center text-black">
                            <div className="col-lg-7 ps-5">
                                <h1 style={{ color: 'rgb(245, 83, 24)' }}>Astron Martin V8</h1>
                                <p className=' ms-5' style={{textAlign:'justify'}}>The 4.3-litre V8 benefits from an ECU upgrade. Our test car is finished in Karussell Orange orange – think a quality Seville marmalade, and looks simply stunning. </p>
                                <p className='text-center ms-5'>Available now with FREE 2-Day Shipping</p>
                            </div>
                            <div className="col-lg-5 ps-5  img-container">
                                <img src={img2} alt="..." />
                            </div>
                        </div>
                        </Carousel.Item>

                    <Carousel.Item className='container'>
                        <div className="row align-items-center text-black">
                            <div className="col-lg-7 ps-5">
                                <h1 style={{ color: 'rgb(139, 138, 138)' }}>Marcedes-Benz AMG Sport</h1>
                                <p className=' ms-5'  style={{textAlign:'justify'}}>If you want a performance coupe with a great track record, an AMG C-Class has a legacy filled with track records, including years of German Touring Car Championships. More than a thoroughbred, it can also make every day a thoroughly joyous drive.</p>
                                <p className='text-center ms-5'>Available now with FREE 2-Day Shipping</p>
                            </div>
                            <div className="col-lg-5 ps-5  img-container">
                                <img src='https://purepng.com/public/uploads/large/mercedes-amg-sport-30l-v6-supercharged-e4s.png'  alt="..." />
                            </div>
                        </div>
                        </Carousel.Item>
                        </Carousel>
                    
                    </>
           

    );
};

export default Banner;