import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', query: '' });
      } else {
        setStatus('Failed to send message. Please try again later.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <>
        <Navbar />

        <div className="flex flex-col items-center justify-center py-20 bg-gray-100 px-4 border border-[#E0E0E0] shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            <h1 className="text-2xl poppins-semibold text-gray-800 mb-6">Contact Us</h1>
            
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white/30  p-6 rounded-2xl shadow-md">
                <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2 poppins-semibold">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="poppins-regular w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                </div>
                <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2 poppins-semibold">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="poppins-regular w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                </div>
                <div className="mb-4">
                <label htmlFor="query" className="block text-gray-700 font-medium mb-2 poppins-semibold">Query</label>
                <textarea
                    id="query"
                    name="query"
                    value={formData.query}
                    onChange={handleChange}
                    className="poppins-regular w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    required
                ></textarea>
                </div>

                <div className="bg-gradient-to-r from-[#00A1E4] to-[#FF3B7B] p-[2px] rounded-xl">
                    <button className="bg-[#2643A2] text-nowrap text-white px-8 py-3 rounded-xl w-full h-full font-semibold transition duration-300 hover:bg-[#1e3788] hover:cursor-pointer"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
                {status && <p className="mt-4 text-center text-gray-600">{status}</p>}
            </form>
        </div>

        <Footer />
    </>
  );
};

export default ContactUs;
