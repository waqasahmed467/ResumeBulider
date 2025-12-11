import React from "react";
import Header from "./Components/header";
import ResumePreview from "./Components/ResumePreview";
import BulbBackground from "./Components/BulbBackground";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-white">
      <BulbBackground/>
      <Header />

      <div className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-2 items-center">
        
        {/* Left Content */}
        <div>
          <h1
            style={{ fontFamily: `MyFont` }}
            className="text-6xl md:text-7xl font-bold leading-tight text-gray-900"
          >
            World Best Resume Builder
          </h1>

          <p
            style={{ fontFamily: "MyFont" }}
            className="text-2xl md:text-3xl font-semibold text-gray-700 mt-4"
          >
            Easy to Use – Professional – Modern Templates
          </p>

          <p className="text-lg text-gray-600 mt-6 leading-relaxed">
            Ap sirf few clicks mai apna fully polished, ATS friendly aur 
            professional resume generate kar saktay hain. 20+ modern templates, 
            auto-formatting aur smart suggestions included.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="px-8 py-3 bg-pink-600 text-white rounded-xl text-lg font-semibold shadow-md hover:bg-pink-700 transition">
              Start Now
            </button>

            <button className="px-8 py-3 border-2 border-pink-600 text-pink-600 rounded-xl text-lg font-semibold hover:bg-pink-50 transition">
              Try Demo
            </button>
          </div>
        </div>

        {/* Right Side Resume Illustration */}
        <div className="hidden md:flex justify-center">
          <ResumePreview/>
        </div>

      </div>
    </div>
  );
};

export default App;
