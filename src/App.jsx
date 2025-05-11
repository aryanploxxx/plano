import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './index.css'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import ParentHome from './pages/ParentHome'
import ProviderDetails from './pages/ProviderDetails'
import ActivityListing from './pages/ActivityListing'
import YourProfile from './pages/YourProfile'
import ContactUs from './pages/ContactUs'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/parent-home" element={<ParentHome />} />
        <Route path="/provider-details" element={<ProviderDetails />} />
        <Route path="/activity-listing" element={<ActivityListing />} />
        <Route path="/profile" element={<YourProfile />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  )
}

export default App
