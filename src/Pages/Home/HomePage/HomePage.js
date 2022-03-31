import React from 'react'
import Footer from '../../Shared/Footer/Footer'
import Navigation from '../../Shared/Navigation/Navigation'
import AddReview from '../AddReview/AddReview'

import Banner from '../Banner/Banner'
import HomeServices from '../HomeServices/HomeServices'


const HomePage = () => {
  return (
    <>
    <Navigation></Navigation>
   

        <Banner></Banner>
        <HomeServices></HomeServices>
        <AddReview></AddReview>
        <Footer></Footer>
        
        
    </>
  )
}

export default HomePage