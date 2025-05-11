import React from 'react'
import { CiCircleCheck } from 'react-icons/ci'

const HeroSection = () => {
  return (
    <div className='w-full px-2 md:px-12 flex flex-col gap-10 items-start justify-center py-6 md:py-20 relative overflow-hidden'>
        <header className='flex flex-col gap-0 md:gap-2'>
            <h1 className='text-[24px] md:text-[42px] poppins-semibold text-left text-[#1A1A1A]'>
                A1Z Academy
            </h1>
            <div className='flex flex-col md:flex-row gap-2 md:gap-4 text-nowrap items-start md:items-center'>
                <h1 className='text-[12px] md:text-[20px] poppins-semibold text-left text-[#4D4D4D]'>
                    (For ages 9 to 12)
                </h1>

                <ul className='flex flex-row items-center w-full'>
                    <li className='text-[12px] md:text-[20px] poppins-regular text-[#4D4D4D]'>Simple circuits</li>
                    <span className='mx-2'>•</span>
                    <li className='text-[12px] md:text-[20px] poppins-regular text-[#4D4D4D]'>Robotics</li>
                    <span className='mx-2'>•</span>
                    <li className='text-[12px] md:text-[20px] poppins-regular text-[#4D4D4D]'>Coding with Scratch</li>
                </ul>
            </div>
        </header>

        <section className='flex flex-col md:flex-row gap-6 md:gap-12 '>
            {/* Images */}
            <div className='flex flex-col gap-4 w-full md:w-2/5'>
                <img src="/a1z-academy.png" alt="Provider Details Hero" className='h-full md:h-1/2 object-cover rounded-2xl shadow-[0_4px_32px_0_#00000014]' />
                
                <div className='hidden md:flex flex-row gap-4 h-1/2'>
                    <div className='w-1/2 h-full'>
                        <img src="/a1z-academy.png" alt="Provider Details Hero" className='h-full object-cover rounded-2xl shadow-[0_4px_32px_0_#00000014]' />
                    </div>
                    <div className='w-1/2 h-full'>
                        <img src="/a1z-academy.png" alt="Provider Details Hero" className='h-full object-cover rounded-2xl shadow-[0_4px_32px_0_#00000014]' />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className='flex flex-col gap-4 w-full md:w-3/5'>
                <h1 className='hidden md:block text-[20px] md:text-2xl poppins-semibold text-[#2643A2] text-left'>
                    Quick Snapshot
                </h1>
                <div className='flex flex-col gap-[2px]'>
                    <p className='text-[24px] md:text-[32px] font-semibold text-[#595959] poppins-semibold'>$189.00 per month</p>
                    <p className='text-[12px] md:text-[16px] poppins-regular text-[#4C4C4C]'>$10 per swimmer for bi-weekly open swim for members</p>
                </div>

                {/* CTA in Mobile View */}
                <div className='flex md:hidden flex-col md:flex-row w-full gap-2 md:gap-4 items-center'>
                    <div className="w-full md:w-1/2 bg-gradient-to-r from-[#00A1E4] to-[#FF3B7B] p-[2px] rounded-xl">
                        <button className="bg-[#2643A2] text-nowrap text-white  text-[16px] md:text-[24px] px-8 py-2 md:py-3 rounded-xl w-full h-full font-semibold transition duration-300 hover:bg-[#1e3788] hover:cursor-pointer">
                          Book with Provider
                        </button>
                    </div>
                    <button className="w-full md:w-1/2 bg-transparent border-[2px] text-[16px] md:text-[24px] border-[#2643A2] text-[#2643A2] hover:cursor-pointer px-6 md:px-12 py-1 md:py-3 rounded-lg md:rounded-xl poppins-regular">
                        Learn More
                    </button>
                </div>


                <div className='hidden md:block w-full h-[2px] bg-[#D2C5C5] my-1'></div>

                {/* Features */}
                <div className='py-1'>
                    <p className='text-[16px] md:text-[20px] font-semibold text-[#4D4D4D] poppins-semibold mb-2'>
                        Features
                    </p>
                    <div className="w-full md:w-2/3 grid grid-cols-2 gap-y-[10px] mb-2">

                        <div className="flex gap-[2px] md:gap-2 items-center">
                            <div className="w-6 h-6 rounded-full flex items-center justify-center">
                                <CiCircleCheck className="w-3 md:w-6 h-3 md:h-6 text-[#808080]" />
                            </div>
                            <span className="text-[#808080] poppins-regular text-[14px] md:text-[20px] ">
                                Pool
                            </span>
                        </div>
                        <div className="flex gap-[2px] md:gap-2 items-center">
                            <div className="w-6 h-6 rounded-full flex items-center justify-center">
                                <CiCircleCheck className="w-3 md:w-6 h-3 md:h-6 text-[#808080]" />
                            </div>
                            <span className="text-[#808080] poppins-regular text-[14px] md:text-[20px] ">
                                Group Classes
                            </span>
                        </div>
                        <div className="flex gap-[2px] md:gap-2 items-center">
                            <div className="w-6 h-6 rounded-full flex items-center justify-center">
                                <CiCircleCheck className="w-3 md:w-6 h-3 md:h-6 text-[#808080]" />
                            </div>
                            <span className="text-[#808080] poppins-regular text-[14px] md:text-[20px] ">
                                Heated
                            </span>
                        </div>
                        <div className="flex gap-[2px] md:gap-2 items-center">
                            <div className="w-6 h-6 rounded-full flex items-center justify-center">
                                <CiCircleCheck className="w-3 md:w-6 h-3 md:h-6 text-[#808080]" />
                            </div>
                            <span className="text-[#808080] poppins-regular text-[14px] md:text-[20px] ">
                                Skating
                            </span>
                        </div>
                        <div className="flex gap-[2px] md:gap-2 items-center">
                            <div className="w-6 h-6 rounded-full flex items-center justify-center">
                                <CiCircleCheck className="w-3 md:w-6 h-3 md:h-6 text-[#808080]" />
                            </div>
                            <span className="text-[#808080] poppins-regular text-[14px] md:text-[20px] ">
                                Private Classes 
                            </span>
                        </div>
                        <div className="flex gap-[2px] md:gap-2 items-center">
                            <div className="w-6 h-6 rounded-full flex items-center justify-center">
                                <CiCircleCheck className="w-3 md:w-6 h-3 md:h-6 text-[#808080]" />
                            </div>
                            <span className="text-[#808080] poppins-regular text-[14px] md:text-[20px] ">
                                Gardening 
                            </span>
                        </div>
                    </div>
                </div>

                <div className='w-full h-[2px] bg-[#D2C5C5]'></div>

                <div className='flex flex-col gap-[2px] mb-2 md:mb-4'>
                    <p className='text-[16px] md:text-[20px] font-semibold text-[#4D4D4D] poppins-semibold'>Coach Experience</p>
                    <p className='text-[12px] md:text-[20px] poppins-regular text-[#4D4D4D]'>Over 35 years of experience; instructors are safety certified and continue education regularly.</p>
                </div>

                <div className='flex flex-col gap-[2px] mb-2 md:mb-4'>
                    <p className='text-[16px] md:text-[20px] font-semibold text-[#4D4D4D] poppins-semibold'>Parent Involvement</p>
                    <p className='text-[12px] md:text-[20px] poppins-regular text-[#4D4D4D]'>Parent must accompany swimmer into the pool for Parent-Tot classes; for kids 12 and under an adult needs to be in the pool area; for kids 13 and up an adult needs to be in the general Lake Union area. </p>
                </div>

                <div className='flex flex-col gap-[2px] mb-2 md:mb-4'>
                    <p className='text-[16px] md:text-[20px] font-semibold text-[#4D4D4D] poppins-semibold'>Special Requirements</p>
                    <p className='text-[12px] md:text-[20px] poppins-regular text-[#4D4D4D]'>Swimsuits required; swim caps or hair ties for long hair; goggles for advanced levels; swim diapers for younger swimmers</p>
                </div>

                {/* CTA in Desktop View */}
                <div className='hidden md:flex flex-col md:flex-row w-full gap-2 md:gap-4 items-center'>
                    <div className="w-full md:w-1/2 bg-gradient-to-r from-[#00A1E4] to-[#FF3B7B] p-[2px] rounded-xl">
                        <button className="bg-[#2643A2] text-nowrap text-white  text-[16px] md:text-[24px] px-8 py-2 md:py-3 rounded-xl w-full h-full font-semibold transition duration-300 hover:bg-[#1e3788] hover:cursor-pointer">
                          Book with Provider
                        </button>
                    </div>
                    <button className="w-full md:w-1/2 bg-transparent border-[2px] text-[16px] md:text-[24px] border-[#2643A2] text-[#2643A2] hover:cursor-pointer px-6 md:px-12 py-1 md:py-3 rounded-lg md:rounded-xl poppins-regular">
                        Learn More
                    </button>
                </div>

            </div>
        </section>
    </div>
  )
}

export default HeroSection