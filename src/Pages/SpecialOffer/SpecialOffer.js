import React from 'react'
import Navigation from '../Shared/Navigation/Navigation'
import './SpecialOffer.css'
import car from '../../images/car.jpg'
import carService from '../../images/car-service-3.jpg'
import Footer from '../Shared/Footer/Footer'


const SpecialOffer = () => {
  return (
      <div>
<Navigation></Navigation>

<section className='section-container' style={{ backgroundImage: `url(${car})` }}>
 <div className='writing-container'>
 <h2> Special Offer for you </h2>
 <br />
 <p> 
      
     Enjoy our test driving without any charge. This is first time in your area. Our excellent experts will guide you. There is also a huge offer to pay in installment. We also provide car services within the warranty time
 </p>
 </div>
</section>

<section className='section-container-2'>
    <div>
        <img  src={carService} alt="" />
    </div>
    <div  className='writing-container-2'>
    <h2>Car Services</h2>
        <br />
        <p><span style={{fontSize:'30px', color:'#8B0000'}}>&#8594; </span>Wiper blades replacement.</p>
        <p><span style={{fontSize:'30px', color:'#8B0000'}}>&#8594; </span>Annual maintainance checkup.</p>
        <p><span style={{fontSize:'30px', color:'#8B0000'}}>&#8594; </span>Changing break fluid.</p>
        <p><span style={{fontSize:'30px', color:'#8B0000'}}>&#8594; </span>Antifreeze added.</p>
       
    </div>

</section>

<section className='section-container' style={{ backgroundImage: `url(https://coolwallpapers.me/th700/5241317-dashboard-car-vintage-retro-classic-automobile-steering-wheel-right-hand-drive-travel-transport-window-reflection-new-york-india-meter-steering-morning-evening-road-street-creative-commons-ima.jpg)` }}>
<div className='writing-container'>
 <h2> Get in Touch with luxury </h2>
 <br />
 <p> 
      
 From the moment you get in, you will be quietly impressed with the understated luxury of our new cars. The stylish dash envelops you with thoughtfully located controls and read-outs so you can focus on the drive. The interior environment is one of uncluttered elegance. Subtle details like ambient overhead console lighting and interior trim add a luxurious touch.
 </p>
 </div>
</section>


<Footer></Footer>
    </div>
  )
}

export default SpecialOffer