import React from 'react'
import Footer from '../components/Footer'
import LoggedInNavbar from '../components/LoggedInNavbar'
import IsThisYourBuisness from '../components/ProviderDetails/IsThisYourBuisness'
import ContactDetails from '../components/ProviderDetails/ContactDetails'
import About from '../components/ProviderDetails/About'
import HeroSection from '../components/ProviderDetails/HeroSection'
import Reviews from '../components/ProviderDetails/Reviews'

const ProviderDetails = () => {
  return (
    <>
        <LoggedInNavbar />
        <HeroSection />
        <About />
        <ContactDetails />
        <Reviews />
        <IsThisYourBuisness />
        <Footer />
    </>
  )
}

export default ProviderDetails