import React from 'react'

const HeroSection = () => {
  return (
    <div className='w-full h-screen flex flex-row justify-between items-center px-3 md:px-12 pt-3 pb-16 '>
        <div className="w-full h-full hero-gradient-bg rounded-4xl px-3 md:px-12" style={{
            backgroundImage: "url('/hero-section-bg-grid.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            {/* Desktop */}
            <div className='hidden md:flex flex-row justify-betwen items-center h-full w-full'>
                {/* Text */}
                <div className='flex flex-col justify-center items-start gap-4 w-full h-full max-w-[724px]'>
                    <h1 className='poppins-semibold md:text-[36px] lg:text-[64px] leading-[110%] tracking-[-0.02em] align-bottom capitalize'>
                        The Ultimate Hub For Your <span className='text-[#F43F80]'>Kids' Activities</span>
                    </h1>
                    <p className='poppins-regular md:text-[16px] lg:text-[24px] leading-[120%] text-[#505050]'>
                        Whether it's swim lessons, math classes, or anything in between, PlanO helps you discover, and manage all your child's activities in one convenient place.
                    </p>
                    <a href='/quiz'>
                        <div className="bg-gradient-to-r from-[#00A1E4] to-[#FF3B7B] p-[2px] rounded-xl inline-block mt-4">
                            <button className="bg-[#2643A2] text-white md:px-8 md:py-3 lg:px-6 lg:py-2 rounded-xl w-full h-full poppins-semibold transition duration-300 hover:bg-[#1e3788] hover:cursor-pointer">
                                Get Started
                            </button>
                        </div>
                    </a>
                </div>

                {/* Image */}
                <div className='hidden md:flex flex-col justify-center items-center w-[70%] h-full max-w-[724px]'>
                    <img src="/hero-image-right-desktop.svg" alt="Hero Section Image" className='w-full h-full object-contain' />
                </div>
            </div>

            {/* Mobile */}
            <div className='flex md:hidden flex-row justify-betwen items-center h-full w-full'>
                {/* Text */}
                <div className='flex md:hidden flex-col justify-center items-center gap-4 w-full h-full '>
                    <h1 className='poppins-semibold text-[32px] leading-[100%] text-center capitalize'>
                        The Ultimate Hub For Your <br/> <span className='text-[#F43F80]'>Kids' Activities</span>
                    </h1>

                    {/* Image */}
                    <div className='flex flex-col justify-center items-center w-full max-w-full sm:max-w-2/3 my-2'>
                        <img src="/hero-image-right-mobile.svg" alt="Hero Section Image" className='w-full h-full' />
                    </div>

                    <p className='poppins-regular text-[14px] text-center leading-[120%] text-[#505050]'>
                        Whether it's swim lessons, math classes, or anything in between, PlanO helps you discover, and manage all your child's activities in one convenient place.
                    </p>

                    <div className=' flex flex-row items-center justify-center gap-4 w-full mt-4'>
                        <div className="bg-gradient-to-r from-[#00A1E4] to-[#FF3B7B] p-[2px] rounded-xl">
                            <button className="bg-[#2643A2] text-nowrap text-white px-8 py-3 rounded-xl w-full h-full font-semibold transition duration-300 hover:bg-[#1e3788] hover:cursor-pointer">
                                Get Started
                            </button>
                        </div>

                        <button className="bg-white text-[#2643A2] border-[2px] border-[#2643A2] poppins-semibold text-[16px] px-8 py-3 rounded-xl w-auto font-semibold transition duration-300  hover:cursor-pointer">
                            Login
                        </button>
                    </div>
                </div>                
            </div>
        </div>
    </div>
  )
}

export default HeroSection