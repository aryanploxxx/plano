import React from 'react'

const ParentHeroSection = () => {
  return (
    <div className='w-full h-auto md:h-screen flex flex-row justify-between items-center px-3 md:px-12 pt-3 pb-12 '>
        <div className="w-full h-full hero-gradient-bg rounded-4xl px-3 md:px-12 py-10" style={{
            backgroundImage: "url('/hero-section-bg-grid.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            {/* Desktop */}
            <div className='hidden md:flex flex-row justify-betwen items-center h-full w-full'>
                {/* Text */}
                <div className='flex flex-col justify-center items-start gap-4 w-full h-full max-w-[724px]'>
                    {/* This will be displayed as per the logged in user */}
                    <p className='poppins-regular text-[#06241B] md:text-[16px] lg:text-[24px] leading-[120%]'>
                        Welcome, Garima!
                    </p>

                    <h1 className='poppins-semibold md:text-[36px] lg:text-[56px] leading-[110%] tracking-[-0.02em] align-bottom capitalize'>
                        Discover activities your kids will love, <span className='text-[#F43F80]'>in seconds!</span>
                    </h1>
                    
                    <div className="bg-gradient-to-r from-[#00A1E4] to-[#FF3B7B] p-[2px] rounded-xl inline-block mt-4">
                        <button className="bg-[#2643A2] text-white md:px-8 md:py-3 lg:px-6 lg:py-2 rounded-xl w-full h-full poppins-semibold transition duration-300 hover:bg-[#1e3788] hover:cursor-pointer">
                            Explore Activities
                        </button>
                    </div>
                </div>

                {/* Image */}
                <div className='hidden md:flex flex-col justify-center items-center w-[70%] h-full max-w-[724px]'>
                    <img src="/parent-home-hero.svg" alt="Hero Section Image" className='w-full h-full object-contain' />
                </div>
            </div>

            {/* Mobile */}
            <div className='flex md:hidden flex-row justify-betwen items-center h-full w-full'>
                {/* Text */}
                <div className='flex md:hidden flex-col justify-center items-center gap-4 w-full h-full '>
                    {/* Image */}
                    <div className='flex flex-col justify-center items-center w-full max-w-full xs:max-w-2/3 my-2'>
                        <img src="/parent-home-hero.svg" alt="Hero Section Image" className='w-full h-full' />
                    </div>

                    <p className='poppins-regular text-[16px] text-center leading-[120%] text-[#06241B]'>
                        Welcome, Garima!
                    </p>

                    <h1 className='poppins-semibold text-[28px] leading-[100%] text-center capitalize'>
                        Discover activities your kids will love, <br/> <span className='text-[#F43F80]'>in seconds!</span>
                    </h1>

                    <div className=' flex flex-row items-center justify-center gap-4 w-full mt-4'>
                        <div className="bg-gradient-to-r from-[#00A1E4] to-[#FF3B7B] p-[2px] rounded-xl">
                            <button className="bg-[#2643A2] text-nowrap text-white px-8 py-3 rounded-xl w-full h-full font-semibold transition duration-300 hover:bg-[#1e3788] hover:cursor-pointer">
                                Explore Activities
                            </button>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    </div>
  )
}

export default ParentHeroSection