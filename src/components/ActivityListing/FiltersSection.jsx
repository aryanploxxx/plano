import React, { useState } from 'react'
import { LuCircleArrowLeft } from 'react-icons/lu'
import SearchComponent from './SearchComponent';
import ActivityCarousel from './ActivityCarousel';
import HighRatedProviderCard from '../HighRatedProviderCard';

const FiltersSection = () => {
    const [showMap, setShowMap] = useState(true);

    return (
    <>
        <div className='flex flex-col gap-4 pt-8 pb-2 px-3 md:px-12'>
            <div className='hover:cursor-pointer hidden md:flex flex-row gap-2 text-[20px] leading-[125%] poppins-medium text-[#999999] items-center'
                onClick={() => window.history.back()}
            >
                <LuCircleArrowLeft />
                Go Back
            </div>

            <SearchComponent />

            <div className='hidden md:flex flex-row justify-end gap-2 text-[20px] leading-[125%] poppins-medium text-[#999999] items-center'>
                <span className='capitalize text-[#5A5A5A]'>Enable search results on maps</span>
                <label className="inline-flex relative items-center cursor-pointer">
                    <input 
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked={true}
                        onChange={() => setShowMap(!showMap)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#10A933]"></div>
                </label>
            </div>
        </div>

        <ActivityCarousel />

        <div className='w-full px-3 md:px-12'>
            {/* Floating Button */}
            <div className='block md:hidden fixed left-1/2 bottom-4 z-50 -translate-x-1/2 bg-black text-white px-6 py-4 rounded-full shadow-lg'>
                <label className='flex items-center space-x-2'>
                    <input
                        type='checkbox'
                        checked={showMap}
                        defaultChecked={true}
                        onChange={() => setShowMap(!showMap)}
                        className='form-checkbox h-4 w-4 text-white'
                    />
                    <span className='poppins-regular'>View on map</span>
                </label>
            </div>

            <div className='w-full flex flex-col-reverse md:flex-row gap-4'>
                {/* Listings */}
                <div className='w-full md:w-[52%] grid grid-cols-1 md:grid-cols-2 gap-4 my-4 mr-4'>
                    <HighRatedProviderCard />
                    <HighRatedProviderCard />
                    <HighRatedProviderCard />
                    <HighRatedProviderCard />
                    <HighRatedProviderCard />
                    <HighRatedProviderCard />
                    <HighRatedProviderCard />
                </div>

                {/* Map */}
                {showMap && (
                    <div className='flex-1 md:sticky top-4 my-4 min-h-[300px] md:h-[700px] rounded-2xl shadow-[0_4px_32px_0_#00000014] border border-[#E5EFFA] bg-blue-300'></div>
                )}
            </div>
        </div>
    </>
    )
};

export default FiltersSection

