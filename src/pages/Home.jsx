import React from 'react'
import Navbar from '../components/Navbar'
import AreYouActivityProvider from '../components/AreYouActivityProvider'
import Footer from '../components/Footer'
import TestimonialCarousel from '../components/Home/TestimonialCarousel'
import HeroSection from '../components/Home/HeroSection'
import HowItWorks from '../components/HowItWorks'
import Metrics from '../components/Home/Metrics'

const Home = () => {
  return (
    <>
        <Navbar />
        <HeroSection />
        <HowItWorks />
        <TestimonialCarousel />
        <Metrics />
        <AreYouActivityProvider />
        <Footer />
    </>
  )
}

export default Home