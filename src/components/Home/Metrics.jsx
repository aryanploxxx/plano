import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaSearch, FaSearchDollar } from 'react-icons/fa'
import { LuIterationCw } from 'react-icons/lu'
import { PiCursorClickLight } from 'react-icons/pi'

const Metrics = () => {
return (
    <div className="hidden md:block w-full relative overflow-hidden">
        <div className="w-full bg-white px-3 xs:px-1 sm:px-28 py-6 md:py-20 relative overflow-hidden" style={{
                backgroundImage: "url('/how-it-works-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
        }}>
            <div className='flex flex-col gap-8 items-center justify-center px-3 md:px-12'>
                {/* Cards */}
                <div className='flex flex-col lg:flex-row justify-between gap-4 lg:gap-12 w-full'>
                    <div className='hover:cursor-pointer flex flex-col items-start md:items-center justify-center gap-2 w-full lg:w-[32%] rounded-2xl px-4 md:px-6 py-4 md:py-8 bg-white shadow-[0_4px_32px_0_#00000014] border border-[#E5EFFA]'>
                        <h2 className='text-xl poppins-semibold flex flex-row gap-2 items-center text-[#2643A2]  font-semibold text-[16px] md:text-[64px]'> 20</h2>
                        <p className='text-left md:text-center text-[#929292] text-regular text-[14px] md:text-[18px] max-w-[300px]'>Save X hours/week searching for activities</p>
                    </div>

                    <div className='hover:cursor-pointer flex flex-col items-start md:items-center justify-center gap-2 w-full lg:w-[32%] rounded-2xl px-4 md:px-6 py-4 md:py-8 bg-white shadow-[0_4px_32px_0_#00000014] border border-[#E5EFFA]'>
                        <h2 className='text-xl poppins-semibold flex flex-row gap-2 items-center text-[#2643A2] font-semibold text-[16px] md:text-[64px]'>1000+</h2>
                        <p className='text-left md:text-center text-[#929292] text-regular text-[14px] md:text-[18px] max-w-[300px]'>Discover over 1000 kids' activity providers, all in one place</p>
                    </div>
                    
                    <div className='hover:cursor-pointer flex flex-col items-start md:items-center justify-center gap-2 w-full lg:w-[32%] rounded-2xl px-4 md:px-6 py-4 md:py-8 bg-white shadow-[0_4px_32px_0_#00000014] border border-[#E5EFFA]'>
                        <h2 className='text-xl poppins-semibold flex flex-row gap-2 items-center text-[#2643A2] font-semibold text-[16px] md:text-[64px]'>42</h2>
                        <p className='text-left md:text-center text-[#929292] text-regular text-[14px] md:text-[18px] max-w-[300px]'>Save X hours/week searching for activities</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Metrics