import React from 'react'
import LoggedInNavbar from '../components/LoggedInNavbar'
import Footer from '../components/Footer'
import AreYouActivityProvider from '../components/AreYouActivityProvider'
import ActivityCarousel from '../components/ActivityListing/ActivityCarousel'
import ListingSection from '../components/ActivityListing/ListingSection'
import FiltersSection from '../components/ActivityListing/FiltersSection'

const ActivityListing = () => {
  return (
    <>
        <LoggedInNavbar />
        <FiltersSection />
        <ActivityCarousel />
        <ListingSection />
        <AreYouActivityProvider />
        <Footer />
    </>
  )
}

export default ActivityListing