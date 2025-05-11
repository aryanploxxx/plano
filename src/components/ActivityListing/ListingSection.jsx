import React, { useState } from 'react';
import HighRatedProviderCard from '../HighRatedProviderCard'

const ListingSection = () => {
    const [showMap, setShowMap] = useState(true);

    return (
        <div className='w-full px-3 md:px-12'>
            {/* Floating Button */}
            <div className='fixed left-1/2 bottom-4 z-50 -translate-x-1/2 bg-black text-white px-6 py-4 rounded-full shadow-lg'>
                <label className='flex items-center space-x-2'>
                    <input
                        type='checkbox'
                        checked={showMap}
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
    );
};

export default ListingSection