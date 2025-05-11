import React from 'react'

const Mission = () => {
  return (
    <div className='w-full px-3 md:px-12'>
        <div className='flex flex-col-reverse md:flex-row gap-4 md:gap-14 items-center justify-between py-6 md:py-10 px-6 md:px-16 bg-[#E4E8F4] rounded-2xl'>
            <img src="/parent-home-mission.svg" alt="Mission" className='w-[90%] md:w-1/4' />

            <div className='flex flex-col gap-6 items-center md:items-start justify-center w-full md:w-3/4'>
                <h1 className='poppins-semibold text-[#06241B] text-[20px] md:text-[36px] leading-[110%] tracking-[-2%] align-bottom capitalize text-center md:text-left'>
                    We are on a mission to give every child the opportunity to explore, learn, and thrive without limit.
                </h1>
                <p className='poppins-semibold text-[#345EB4] text-[12px] md:text-[16px] leading-[110%] text-center md:text-left'>
                    Built for parent, by parents, with love!
                </p>
            </div>
        </div>
    </div>
  )
}

export default Mission