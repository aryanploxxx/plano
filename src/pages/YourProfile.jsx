import React from 'react';
import LoggedInNavbar from '../components/LoggedInNavbar';
import Footer from '../components/Footer';
import HighRatedActivities from '../components/HIghRatedActivities';
import { Map } from 'lucide-react';
import { MdEmail } from 'react-icons/md';

const YourProfile = () => {
return (
    <>
        <LoggedInNavbar />

        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-8">
            {/* Profile Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl w-full mb-8 border border-[#E0E0E0]">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    {/* User Avatar */}
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-4xl font-bold shadow-md hover:shadow-lg transition-shadow">
                        U
                    </div>

                    {/* User Details */}
                    <div className="text-center md:text-left">
                        <h1 className="text-2xl font-bold text-gray-800 mb-2">John Doe</h1>
                        <p className="text-gray-600 mb-2 flex flex-row gap-2 items-center justify-center md:justify-start">
                            <MdEmail className='h-5 w-5'/> johndoe@example.com
                        </p>
                        <p className="flex flex-row gap-2 text-gray-600 items-center justify-center md:justify-start">
                            <Map /> 120001
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full ">
                <HighRatedActivities headline="Your Saved Activities"/>
            </div>
        </div>

        <Footer />
    </>
);
};

export default YourProfile;