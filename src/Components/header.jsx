import React from 'react';

const Header = () => {
  return (
    <div className="w-full p-5 bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo / Brand */}
        <h1 
          className="text-xl md:text-2xl font-bold tracking-wide"
          style={{ textShadow: '2px 2px 3px black', fontFamily: 'MyFont' }}
        >
          Resume Builder
        </h1>

        {/* Navigation (Optional – can expand later) */}
        <div className="hidden md:flex items-center gap-8 text-lg font-medium">
          <a href="#" className="hover:text-pink-300 transition">Home</a>
          <a href="#" className="hover:text-pink-300 transition">Templates</a>
          <a href="#" className="hover:text-pink-300 transition">Pricing</a>
          <a href="#" className="hover:text-pink-300 transition">Contact</a>
        </div>

        {/* CTA Button */}
        <button className="px-5 py-2 bg-pink-600 hover:bg-pink-700 transition rounded-xl font-semibold text-sm md:text-base shadow">
          Create Resume
        </button>

      </div>
    </div>
  );
};

export default Header;
