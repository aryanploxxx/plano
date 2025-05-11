import React from 'react'

const About = () => {
  return (
    <>
        {/* About */}
        <div className='flex flex-col gap-1 md:gap-2 w-full px-3 md:px-12 py-2'>
            <h1 className='text-[20px] md:text-2xl poppins-semibold text-[#2643A2] text-left'>
                About
            </h1>
            <p className='text-[12px] md:text-[20px] leading-[140%] text-[#4D4D4D]'>
                A1Z Studio is a creative learning space where curiosity meets discovery! Designed for young minds aged 5–14, we offer hands-on STEM hobby programs that spark imagination and build real-world skills. From building robots and coding games to growing crystals and designing eco-projects, our interactive sessions turn science, tech, engineering, and math into exciting adventures. At A1Z Studio, we make learning playful, purposeful, and full of “aha!” moments.
            </p>
        </div>

        <div className='flex flex-col gap-3 md:gap-4 w-full px-3 md:px-12 py-6'>
            <h1 className='text-[20px] md:text-2xl poppins-semibold text-[#2643A2] text-left'>
                Offered Classes
            </h1>
            
            <div className='flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-between w-full'>
                <div className='flex flex-col gap-2 items-start justify-center w-full lg:w-[32%] rounded-2xl px-4 md:px-6 py-4 md:py-8 bg-[#F8F9FC] shadow-[0_4px_32px_0_#00000014] border border-[#E5EFFA]'>
                    <h2 className='text-[12px] md:text-[24px] poppins-semibold text-[#4D4D4D]'>
                        Advanced robotics
                    </h2>

                    <p className='text-[36px] poppins-semibold text-[#2643A2]'>$84</p>
                    
                    <p className='text-[12px] md:text-[20px] poppins-semibold text-[#4D4D4D]'>
                        Age group 9 to 12
                    </p>
                    <p className='text-[12px] md:text-[16px] poppins-regular text-[#4D4D4D]'>
                        Preschoolers (3-5 years) will learn water exploration and swim techniques like floating and kicking independently. They will also learn water safety skills.
                    </p>

                    <p className='text-[12px] md:text-[20px] poppins-semibold text-[#4D4D4D]'>
                        Experience
                    </p>
                    <p className='text-[12px] md:text-[16px] poppins-regular text-[#4D4D4D]'>
                        Parents and toddlers will engage in water play, songs, and exploration activities. The teacher-student ratio is high, allowing for personalized attention. Exercises and drills focus on getting comfortable in the water.
                    </p>
                </div>
                
                <div className='flex flex-col gap-2 items-start justify-center w-full lg:w-[32%] rounded-2xl px-4 md:px-6 py-4 md:py-8 bg-[#F8F9FC] shadow-[0_4px_32px_0_#00000014] border border-[#E5EFFA]'>
                    <h2 className='text-[14px] md:text-[24px] poppins-bold md:poppins-semibold text-[#4D4D4D]'>
                        Advanced robotics
                    </h2>

                    <p className='text-[36px] poppins-semibold text-[#2643A2]'>$84</p>
                    
                    <p className='text-[12px] md:text-[20px] poppins-semibold text-[#4D4D4D]'>
                        Age group 9 to 12
                    </p>
                    <p className='text-[12px] md:text-[16px] poppins-regular text-[#4D4D4D]'>
                        Preschoolers (3-5 years) will learn water exploration and swim techniques like floating and kicking independently. They will also learn water safety skills.
                    </p>

                    <p className='text-[12px] md:text-[20px] poppins-semibold text-[#4D4D4D]'>
                        Experience
                    </p>
                    <p className='text-[12px] md:text-[16px] poppins-regular text-[#4D4D4D]'>
                        Parents and toddlers will engage in water play, songs, and exploration activities. The teacher-student ratio is high, allowing for personalized attention. Exercises and drills focus on getting comfortable in the water.
                    </p>
                </div>

                <div className='flex flex-col gap-2 items-start justify-center w-full lg:w-[32%] rounded-2xl px-4 md:px-6 py-4 md:py-8 bg-[#F8F9FC] shadow-[0_4px_32px_0_#00000014] border border-[#E5EFFA]'>
                    <h2 className='text-[12px] md:text-[24px] poppins-semibold text-[#4D4D4D]'>
                        Advanced robotics
                    </h2>

                    <p className='text-[36px] poppins-semibold text-[#2643A2]'>$84</p>
                    
                    <p className='text-[12px] md:text-[20px] poppins-semibold text-[#4D4D4D]'>
                        Age group 9 to 12
                    </p>
                    <p className='text-[12px] md:text-[16px] poppins-regular text-[#4D4D4D]'>
                        Preschoolers (3-5 years) will learn water exploration and swim techniques like floating and kicking independently. They will also learn water safety skills.
                    </p>

                    <p className='text-[12px] md:text-[20px] poppins-semibold text-[#4D4D4D]'>
                        Experience
                    </p>
                    <p className='text-[12px] md:text-[16px] poppins-regular text-[#4D4D4D]'>
                        Parents and toddlers will engage in water play, songs, and exploration activities. The teacher-student ratio is high, allowing for personalized attention. Exercises and drills focus on getting comfortable in the water.
                    </p>
                </div>
            </div>

        </div>

        {/* Provider Policies */}
        <div className='flex flex-col gap-1 md:gap-2 w-full px-3 md:px-12 py-2'>
            <h1 className='text-[20px] md:text-2xl poppins-semibold text-[#2643A2] text-left'>
                Provider Policies
            </h1>
            <p className='text-[12px] md:text-[20px] leading-[140%] text-[#4D4D4D]'>
                You can register for swim lessons three weeks before your desired start date. We have continuous enrollment which means you can join swim lessons any time of the month as long as there is availability in the class. We do not offer refunds for cancellations; makeup lessons are offered. Students who miss more than one half of a month of lessons without providing notice will be removed from the class. Exceptions are provided for family and medical emergencies.
            </p>
        </div>
    </>
  )
}

export default About