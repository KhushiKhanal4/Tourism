import React from 'react'

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen -mt-10 p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
      <form className="w-full max-w-lg  bg-gradient-to-tr from-[#34d399b0] to-[#0d9489b0] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-gray-700 bg-[#ffffff86]"
            id="name"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-gray-700 bg-[#ffffff86]"
            id="email"
            type="email"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none  rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline h-32 resize-none placeholder:text-gray-700 bg-[#ffffff86]"
            id="message"
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-emerald-800 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
