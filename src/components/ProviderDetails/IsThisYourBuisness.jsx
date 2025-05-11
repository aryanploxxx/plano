import React from 'react'

const IsThisYourBuisness = () => {
  return (
    <div className="w-full px-3 md:px-12 relative overflow-hidden py-8 md:py-16">
        <div className="w-full bg-[#2643A2] px-3 xs:px-1 sm:px-0 py-6 md:py-12 relative overflow-hidden rounded-2xl" style={{
            backgroundImage: "url('/activity-provider-bg.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
        
        <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10 max-w-4xl">
            {/* Text content */}
            <h2 className="text-[16px] sm:text-4xl md:text-5xl lg:text-[36px] poppins-semibold text-[#F1F1F1] leading-[130%] tracking-normal text-center mb-3 sm:mb-3">
                Is this your business?
            </h2>
            
            {/* CTA Button */}
            <div className='flex flex-row gap-2 md:gap-4 items-center'>
                <button className="bg-white border-[2px] border-[#1E4CE0] text-[#1E4CE0] hover:cursor-pointer px-6 md:px-12 py-1 md:py-2 text-[14px] md:text-[20px] rounded-lg md:rounded-xl poppins-regular">
                    Modify
                </button>
                <button className="bg-transparent border-[2px] border-white text-white hover:cursor-pointer px-6 md:px-12 py-1 md:py-2 text-[14px] md:text-[20px] rounded-lg md:rounded-xl poppins-regular">
                    Claim
                </button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default IsThisYourBuisness