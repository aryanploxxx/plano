"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowLeft, ArrowRight, ChevronDown, Search } from "lucide-react"

const SearchComponent = () => {
  // State for dropdown visibility
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mapResults, setMapResults] = useState(false)
  const [selectedValues, setSelectedValues] = useState({
    age: "",
    activity: "",
    location: "",
    skills: [],
  })

  // Refs for dropdown elements
  const dropdownRefs = {
    age: useRef(null),
    activity: useRef(null),
    location: useRef(null),
    skills: useRef(null),
  }

  // Sample data for dropdowns
  const dropdownOptions = {
    age: ["0-2 years", "3-5 years", "6-8 years", "9-12 years", "13-16 years"],
    activity: [
      "Art",
      "Chess",
      "Cooking",
      "Dance",
      "Gymnastics",
      "Language",
      "Music",
      "Nature",
      "Performing Arts",
      "Sports",
    ],
    location: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego"],
    skills: [
      "Beginner",
      "Intermediate",
      "Advanced",
      "Creative",
      "Analytical",
      "Physical",
      "Musical",
      "Linguistic",
      "Artistic",
    ],
  }

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown) {
        const ref = dropdownRefs[openDropdown]
        if (ref.current && !ref.current.contains(event.target)) {
          setOpenDropdown(null)
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [openDropdown])

  // Toggle dropdown visibility
  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  // Handle selection in dropdowns
  const handleSelect = (dropdown, value) => {
    if (dropdown === "skills") {
      // For skills, we want to allow multiple selections
      setSelectedValues((prev) => ({
        ...prev,
        skills: prev.skills.includes(value) ? prev.skills.filter((skill) => skill !== value) : [...prev.skills, value],
      }))
    } else {
      setSelectedValues((prev) => ({
        ...prev,
        [dropdown]: value,
      }))
      setOpenDropdown(null)
    }
  }

  // Scroll functionality for activity categories
  const categoriesRef = useRef(null)

  const scroll = (direction) => {
    if (categoriesRef.current) {
      const { current } = categoriesRef
      const scrollAmount = direction === "left" ? -200 : 200
      current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">

        {/* Modern unified search bar */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-6 w-full bg-white rounded-xl border border-[#E5EFFA] shadow-[0_4px_32px_0_#00000014] px-2 py-[2px]">
            {/* Age dropdown */}
            <div className="relative flex-1" ref={dropdownRefs.age}>
                <button
                onClick={() => toggleDropdown("age")}
                className="w-full h-full px-4 py-3 text-left flex flex-col justify-center"
                >
                <div className="text-[14px] poppins-medium text-[#5A5A5A] uppercase">AGE</div>
                <div className="text-[14px] text-[#ACACAC] poppins-regular mt-1 flex items-center">
                    {selectedValues.age || "Choose your child's age"}
                    <ChevronDown
                    className={`w-4 h-4 ml-2 text-gray-400 transition-transform ${
                        openDropdown === "age" ? "transform rotate-180" : ""
                    }`}
                    />
                </div>
                </button>

                {openDropdown === "age" && (
                <div className="absolute z-20 mt-1 w-full bg-white rounded-lg shadow-lg py-1 max-h-60 overflow-auto">
                    {dropdownOptions.age.map((age) => (
                    <div
                        key={age}
                        className={`poppins-regular px-4 py-2 cursor-pointer hover:bg-gray-50 ${
                        selectedValues.age === age ? "bg-blue-50 text-blue-600" : ""
                        }`}
                        onClick={() => handleSelect("age", age)}
                    >
                        {age}
                    </div>
                    ))}
                </div>
                )}
            </div>

            {/* Vertical divider */}
            <div className="h-px md:w-px md:h-auto bg-[#CBCBCB] mx-3 md:my-3"></div>

            {/* Activity dropdown */}
            <div className="relative flex-1" ref={dropdownRefs.activity}>
                <button
                onClick={() => toggleDropdown("activity")}
                className="w-full h-full px-4 py-3 text-left flex flex-col justify-center"
                >
                <div className="text-[14px] poppins-medium text-[#5A5A5A] uppercase">ACTIVITY</div>
                <div className="text-[14px] text-[#ACACAC] poppins-regular mt-1 flex items-center">
                    {selectedValues.activity || "Choose an activity"}
                    <ChevronDown
                    className={`w-4 h-4 ml-2 text-gray-400 transition-transform ${
                        openDropdown === "activity" ? "transform rotate-180" : ""
                    }`}
                    />
                </div>
                </button>

                {openDropdown === "activity" && (
                <div className="absolute z-20 mt-1 w-full bg-white rounded-lg shadow-lg py-1 max-h-60 overflow-auto">
                    {dropdownOptions.activity.map((activity) => (
                    <div
                        key={activity}
                        className={`poppins-regular px-4 py-2 cursor-pointer hover:bg-gray-50 ${
                        selectedValues.activity === activity ? "bg-blue-50 text-blue-600" : ""
                        }`}
                        onClick={() => handleSelect("activity", activity)}
                    >
                        {activity}
                    </div>
                    ))}
                </div>
                )}
            </div>

            {/* Vertical divider */}
            <div className="h-px md:w-px md:h-auto bg-[#CBCBCB] mx-3 md:my-3"></div>

            {/* Location dropdown */}
            <div className="relative flex-1" ref={dropdownRefs.location}>
                <button
                onClick={() => toggleDropdown("location")}
                className="w-full h-full px-4 py-3 text-left flex flex-col justify-center"
                >
                <div className="text-[14px] poppins-medium text-[#5A5A5A] uppercase">LOCATION</div>
                <div className="text-[14px] text-[#ACACAC] poppins-regular mt-1 flex items-center">
                    {selectedValues.location || "Choose your location"}
                    <ChevronDown
                    className={`w-4 h-4 ml-2 text-gray-400 transition-transform ${
                        openDropdown === "location" ? "transform rotate-180" : ""
                    }`}
                    />
                </div>
                </button>

                {openDropdown === "location" && (
                <div className="absolute z-20 mt-1 w-full bg-white rounded-lg shadow-lg py-1 max-h-60 overflow-auto">
                    {dropdownOptions.location.map((location) => (
                    <div
                        key={location}
                        className={`poppins-regular px-4 py-2 cursor-pointer hover:bg-gray-50 ${
                        selectedValues.location === location ? "bg-blue-50 text-blue-600" : ""
                        }`}
                        onClick={() => handleSelect("location", location)}
                    >
                        {location}
                    </div>
                    ))}
                </div>
                )}
            </div>

            {/* Vertical divider */}
            <div className="h-px md:w-px md:h-auto bg-[#CBCBCB] mx-3 md:my-3"></div>

            {/* Skills dropdown */}
            <div className="relative flex-1" ref={dropdownRefs.skills}>
                <button
                onClick={() => toggleDropdown("skills")}
                className="w-full h-full px-4 py-3 text-left flex flex-col justify-center"
                >
                <div className="text-[14px] poppins-medium text-[#5A5A5A] uppercase">SKILLS</div>
                <div className="text-[14px] text-[#ACACAC] poppins-regular mt-1 flex items-center">
                    {selectedValues.skills.length > 0
                    ? `${selectedValues.skills.length} skills selected`
                    : "Add required skills"}
                    <ChevronDown
                    className={`w-4 h-4 ml-2 text-gray-400 transition-transform ${
                        openDropdown === "skills" ? "transform rotate-180" : ""
                    }`}
                    />
                </div>
                </button>

                {openDropdown === "skills" && (
                <div className="absolute z-20 mt-1 w-full bg-white rounded-lg shadow-lg py-1 max-h-60 overflow-auto">
                    {dropdownOptions.skills.map((skill) => (
                    <div
                        key={skill}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-50 flex items-center"
                        onClick={() => handleSelect("skills", skill)}
                    >
                        <div
                        className={`w-4 h-4 mr-2 border rounded ${
                            selectedValues.skills.includes(skill) ? "bg-blue-600 border-blue-600" : "border-gray-300"
                        }`}
                        >
                        {selectedValues.skills.includes(skill) && (
                            <svg
                            className="poppins-regular w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        )}
                        </div>
                        {skill}
                    </div>
                    ))}
                </div>
                )}
            </div>
        </div>

        {/* Search button */}
        <div className="w-full md:w-auto bg-gradient-to-r from-[#00A1E4] to-[#FF3B7B] p-[2px] rounded-xl">
            <button className="flex flex-row justify-center gap-1 items-center bg-[#2643A2] text-nowrap text-white px-8 py-2 md:py-3 rounded-xl w-full h-full font-semibold transition duration-300 hover:bg-[#1e3788] hover:cursor-pointer">
                <Search className="w-5 h-5 mr-2" />
                <span className="text-lg font-medium">Search</span>
            </button>
        </div>

    </div>
  )
}

export default SearchComponent;