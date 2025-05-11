import React from "react";
// import { Button } from "@/components/ui/button";

const AreYouActivityProvider = () => {
  return (
    <div className="w-full px-3 md:px-12 relative overflow-hidden py-8 md:py-16">
        <div className="w-full bg-[#2643A2] px-3 xs:px-1 sm:px-0 py-6 md:py-12 relative overflow-hidden rounded-2xl" style={{
            backgroundImage: "url('/activity-provider-bg.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
        
        <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10 max-w-4xl">
            {/* Avatar images */}
            <div className="flex -space-x-4 md:-space-x-6 mb-6 sm:mb-8">
            {[1, 2, 3, 4].map((index) => (
                <div 
                key={index}
                className="w-[40px] h-[40px] sm:w-20 sm:h-20 md:h-[90px] md:w-[90px] rounded-full flex flex-row items-center justify-center overflow-hidden flex-shrink-0"
                >
                <img 
                    src={`/circle-${index}.svg`} 
                    alt={`Activity provider ${index}`}
                    className="w-full h-full"
                />
                </div>
            ))}
            </div>
            
            {/* Text content */}
            <h2 className="text-[16px] sm:text-4xl md:text-5xl lg:text-[36px] poppins-bold text-[#F1F1F1] leading-[130%] tracking-normal text-center mb-3 sm:mb-3">
                Are you an Activity Provider?
            </h2>
            <p className="text-[12px] sm:text-xl font-normal md:text-[24px] md:leading-[120%] tracking-normal text-center align-bottom text-white/90 mb-6 sm:mb-10">
                List your services on PlanO to connect with parents looking for kids' activities.
            </p>
            
            {/* CTA Button */}
            <button className="bg-transparent border-[2px] border-white text-white hover:cursor-pointer px-6 py-2 text-[14px] md:text-[20px] rounded-xl poppins-semibold">
                Join as a provider
            </button>
        </div>
        </div>
    </div>
  );
};

export default AreYouActivityProvider;