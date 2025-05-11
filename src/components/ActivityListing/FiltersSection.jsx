import React from 'react'
import { LuCircleArrowLeft } from 'react-icons/lu'
import SearchComponent from './SearchComponent';

const FiltersSection = () => {
return (
    <div className='flex flex-col gap-4 pt-8 pb-2 px-3 md:px-12'>
        <div className='hidden md:flex flex-row gap-2 text-[20px] leading-[125%] poppins-medium text-[#999999] items-center'>
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
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#10A933]"></div>
            </label>
        </div>
    </div>
)
};

export default FiltersSection

