import React from 'react';

const Hero = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/iot_bg.jpg')" }} // Replace with your optimized image path
    >
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full px-8 text-white w-full bg-opacity-50 bg-black">
        <div className="max-w-xl z-10 pr-0 lg:pr-16 text-center lg:text-left mb-8 lg:mb-0 w-full">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Internet of Things (IoT)
          </h1>
          <p className="text-xl lg:text-2xl mb-6">
            The research related to emerging technologies such as IoT holds paramount importance across the globe as of today.
          </p>
          <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
