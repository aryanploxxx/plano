import React from 'react'

const Footer = () => {
  return (
    <div className='max-h-[70%] md:max-h-[40%] md:min-h-[40%] px-6 py-10 md:p-10 rounded-tl-2xl rounded-tr-2xl footer-gradient-bg' 
        >
        
        <div className='flex flex-col items-center justify-center gap-4 md:gap-8 w-full'>
            {/* Part 1 */}
            <div className='flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 w-full'>
                {/* Table */}
                <div className='flex flex-col items-start justify-between gap-8 w-full'>
                    {/* Image */}
                    <img src="/plan-o-logo.svg" alt="Logo" className='w-1/3 md:w-[232px]' />

                    {/* Links */}
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-8 w-full'>
                        {/* Column 1 */}
                        <div className='flex flex-col gap-2 sm:gap-4'>
                            <h2 className='font-bold text-base md:text-xl lg:text-2xl text-[#F7F7F7]'>
                                Company
                            </h2>
                            <div className='flex flex-col gap-2 sm:gap-3 text-base md:text-xl lg:text-2xl text-[#F7F7F7]'>
                                <a href="#" className='hover:text-white'>About</a>
                                <a href="#" className='hover:text-white'>FAQs</a>
                                <a href="#" className='hover:text-white'>Contact</a>
                            </div>
                        </div>
                            
                        {/* Column 2 */}
                        <div className='flex flex-col gap-2 sm:gap-4'>
                            <h2 className='font-bold text-base md:text-xl lg:text-2xl text-[#F7F7F7]'>
                                Legal
                            </h2>
                            <div className='flex flex-col gap-2 sm:gap-3 text-base md:text-xl lg:text-2xl text-[#F7F7F7]'>
                                <a href="#" className='hover:text-white'>Privacy policy</a>
                                <a href="#" className='hover:text-white'>Terms and Conditions</a>
                                <a href="#" className='hover:text-white'>Cookie Policy</a>
                            </div>
                        </div>

                        {/* Column 3 */}
                        <div className='flex flex-col gap-2 sm:gap-4'>
                            <h2 className='font-bold text-base md:text-xl lg:text-2xl text-[#F7F7F7]'>
                                For Parents
                            </h2>
                            <div className='flex flex-col gap-3 text-base md:text-xl lg:text-2xl text-[#F7F7F7]'>
                                <a href="#" className='hover:text-white'>Search Activity</a>
                            </div>
                        </div>

                        {/* Column 4 */}
                        <div className='flex flex-col gap-2 sm:gap-4'>
                            <h2 className='font-bold text-base md:text-xl lg:text-2xl text-[#F7F7F7]'>
                                For Providers
                            </h2>
                            <div className='flex flex-col gap-3 text-base md:text-xl lg:text-2xl text-[#F7F7F7]'>
                                <a href="#" className='hover:text-white'>Register Your Business</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className='flex flex-row items-center justify-between gap-[28px]'>
                    <a href="#" className='text-[#F7F7F7] hover:text-white'>
                        <img src="/instagram.svg" alt="Facebook" className='w-8 h-8' />
                    </a>
                    <a href="#" className='text-[#F7F7F7] hover:text-white'>
                        <img src="/youtube.svg" alt="Twitter" className='w-8 h-8' />
                    </a>
                    <a href="#" className='text-[#F7F7F7] hover:text-white'>
                        <img src="/twitter.svg" alt="Instagram" className='w-8 h-8' />
                    </a>
                </div>
            </div>

            {/* Part 2 */}
            <div className='flex flex-col sm:flex-row items-center sm:items-end justify-between text-[#F7F7F7] border-t border-[#F7F7F7] pt-6 md:pt-10 w-full gap-6 md:gap-0'>
                {/* Copyright */}
                <p className='font-sans font-normal text-base leading-[140%] tracking-normal'>
                    &copy; 2025 PlanO. All rights reserved.
                </p>

                {/* Privacy Policy & Links */}
                <div className='flex flex-row items-center justify-center text-center gap-6 font-sans font-normal text-base leading-[140%] tracking-normal hover:text-white'>
                    <a href="#" className=''>Privacy Policy</a>
                    <a href="#" className=''>Terms of Service</a>
                    <a href="#" className=''>Cookies Settings</a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer
