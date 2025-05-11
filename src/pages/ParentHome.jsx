import React from 'react'
import AreYouActivityProvider from '../components/AreYouActivityProvider'
import HowItWorks from '../components/HowItWorks'
import LoggedInNavbar from '../components/LoggedInNavbar'
import Footer from '../components/Footer'
import Mission from '../components/ParentHome/Mission'
import ParentHeroSection from '../components/ParentHome/ParentHeroSection'
import RecommendedActivities from '../components/RecommendedActivities'
import HighRatedActivities from '../components/HIghRatedActivities'

const ParentHome = () => {
  return (
    <>
        <LoggedInNavbar />
        <ParentHeroSection />
        <RecommendedActivities />
        <HighRatedActivities />
        <Mission />
        <HowItWorks />
        <AreYouActivityProvider />
        <Footer />
    </>
  )
}

export default ParentHome