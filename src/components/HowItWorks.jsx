import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaSearch, FaSearchDollar } from 'react-icons/fa'
import { LuIterationCw } from 'react-icons/lu'
import { PiCursorClickLight } from 'react-icons/pi'

const HowItWorks = () => {
return (
    <div className="w-full relative overflow-hidden mb-4">
        <div className="w-full bg-white px-3 xs:px-1 sm:px-0 py-6 md:py-20 relative overflow-hidden" style={{
                backgroundImage: "url('/how-it-works-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
        }}>
            <div className='flex flex-col gap-8 items-center justify-center px-3 md:px-12'>
                <h1 className='text-3xl md:text-[48px] poppins-semibold text-center text-[#06241B]'>How it works</h1>

                {/* Cards */}
                <div className='flex flex-col lg:flex-row justify-between gap-4 lg:gap-12 w-full'>
                    <div className='hover:cursor-pointer flex flex-col items-start md:items-center justify-center gap-2 md:gap-4 w-full lg:w-[32%] rounded-2xl px-4 md:px-6 py-4 md:py-8 bg-white shadow-[0_4px_32px_0_#00000014] border border-[#E5EFFA]'>
                        <h2 className='text-xl poppins-semibold flex flex-row gap-2 items-center text-[#2643A2]  font-semibold text-[16px] md:text-[32px]'> <CiSearch /> Discover</h2>
                        <p className='text-left md:text-center text-[#929292] text-regular text-[14px] md:text-[18px]'>Explore a world of activities tailored to your child's age and interests.</p>
                    </div>

                    <div className='hover:cursor-pointer flex flex-col items-start md:items-center justify-center gap-2 md:gap-4 w-full lg:w-[32%] rounded-2xl px-4 md:px-6 py-4 md:py-8 bg-white shadow-[0_4px_32px_0_#00000014] border border-[#E5EFFA]'>
                        <h2 className='text-xl poppins-semibold flex flex-row gap-2 items-center text-[#2643A2] font-semibold text-[16px] md:text-[32px]'><LuIterationCw /> Plan</h2>
                        <p className='text-left md:text-center text-[#929292] text-regular text-[14px] md:text-[18px]'>Compare providers by prices, ratings, and key details side-by-side. Make confident choices in minutes.</p>
                    </div>
                    
                    <div className='hover:cursor-pointer flex flex-col items-start md:items-center justify-center gap-2 md:gap-4 w-full lg:w-[32%] rounded-2xl px-4 md:px-6 py-4 md:py-8 bg-white shadow-[0_4px_32px_0_#00000014] border border-[#E5EFFA]'>
                        <h2 className='text-xl poppins-semibold flex flex-row gap-2 items-center text-[#2643A2] font-semibold text-[16px] md:text-[32px]'><PiCursorClickLight /> Select</h2>
                        <p className='text-left md:text-center text-[#929292] text-regular text-[14px] md:text-[18px]'>Dive into AI-powered summaries of each provider's classes. No more research overload, just clear, concise insights to help you book the right class for your child.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default HowItWorks