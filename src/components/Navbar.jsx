"use client"

import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="w-full bg-white shadow-xs px-4 sm:px-6 lg:px-12">
      {/* Desktop and Mobile Navbar */}
      <div className="max-w-7xl mx-auto lg:px-0">
        <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
                    <img 
                        src="/plan-o-logo-navbar.svg" 
                        alt="Plan Logo" 
                        className="h-12 w-100px md:w-auto"
                    />
            </div>

            <div className="hidden lg:flex flex-row items-center justify-end gap-14 w-full ">
              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center gap-8 text-nowrap">
                  <a href="#" className="text-[#6D737A] poppins-regular hover:text-gray-900 px-3 py-2 text-base font-medium">
                    Our Story
                  </a>
                  <a href="#" className="text-[#6D737A] poppins-regular hover:text-gray-900 px-3 py-2 text-base font-medium">
                    For Providers
                  </a>
                  <a href="#" className="text-[#6D737A] poppins-regular hover:text-gray-900 px-3 py-2 text-base font-medium">
                    Contact
                  </a>
              </div>

              {/* Desktop Buttons */}
              <div className='hidden md:flex flex-row items-center gap-4'>  
                  <button className="text-[#2643A2] border-[2px] border-[#2643A2] poppins-semibold text-[16px] px-8 py-3 rounded-xl w-auto font-semibold transition duration-300 hover:cursor-pointer">
                      Login
                  </button>

                  <div className="bg-gradient-to-r from-[#00A1E4] to-[#FF3B7B] p-[2px] rounded-xl">
                      <button className="bg-[#2643A2] text-nowrap text-white px-8 py-3 rounded-xl w-full h-full font-semibold transition duration-300 hover:bg-[#1e3788] hover:cursor-pointer">
                          Get Started
                      </button>
                  </div>
              </div>
            </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg poppins-medium">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Our Story
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            For Providers
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Contact
          </a>

        </div>
      </div>
    </nav>
  )
}
