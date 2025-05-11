import React from 'react'

const ContactDetails = () => {
return (
    <div className='w-full px-3 md:px-12 relative overflow-hidden py-8 md:py-16'>
        <div className='flex flex-col md:flex-row gap-4'>
            {/* Contact Details */}
            <div className='flex flex-col gap-3 w-full md:w-3/4 border rounded-2xl border-[#E5EFFA] bg-white shadow-[0_4px_32px_0_#00000014] px-4 md:px-6 py-4 md:py-8'>
                <h1 className='text-[20px] md:text-2xl poppins-semibold text-[#2643A2] text-left'>
                    Contact details
                </h1>
                <div className='flex flex-col md:flex-row gap-4 md:gap-12'>
                    <div className='max-w-full md:max-w-1/3'>
                        <p className='text-[20px] poppins-semibold leading-[140%] text-[#4D4D4D]'>Address</p>
                        <h1 className='text-[14px] md:text-[20px] poppins-medium leading-[140%] text-[#929292]'>A1Z Studio, Suite 210, Willow Creek Center, 1450 Greenfield Drive, San Mateo, CA 94403</h1>
                    </div>
                    <div className='max-w-full md:max-w-1/3'>
                        <p className='text-[20px] poppins-semibold leading-[140%] text-[#4D4D4D]'>Email</p>
                        <h1 className='text-[14px] md:text-[20px] poppins-medium leading-[140%] text-[#929292]'>hello@a1zstudio.com</h1>
                    </div>
                    <div className='max-w-full md:max-w-1/3'>
                        <p className='text-[20px] poppins-semibold leading-[140%] text-[#4D4D4D]'>Phone</p>
                        <h1 className='text-[14px] md:text-[20px] poppins-medium leading-[140%] text-[#929292]'>+1 (415) 555-298</h1>
                    </div>
                </div>
            </div>

            {/* Social Media Links */}
            <div className='flex flex-col gap-3 items-center justify-center w-full md:w-1/4 border rounded-2xl border-[#E5EFFA] bg-white shadow-[0_4px_32px_0_#00000014] px-4 md:px-6 py-4 md:py-8'>
                 <h1 className='text-[20px] md:text-2xl poppins-semibold text-[#2643A2] text-center '>
                    Social Media Links
                </h1>
                <div className='flex flex-row items-center gap-4 justify-between max-w-1/2 text-black '>
                    <a href="#" className='text-black'>
                        <img src="/instagram.svg" alt="Facebook" className='w-8 h-8 filter brightness-0' />
                    </a>
                    <a href="#" className=''>
                        <img src="/youtube.svg" alt="Twitter" className='w-8 h-8 filter brightness-0' />
                    </a>
                    <a href="#" className=''>
                        <img src="/twitter.svg" alt="Instagram" className='w-8 h-8 filter brightness-0' />
                    </a>
                </div>
            </div>
        </div>
    </div>
)
}

export default ContactDetails