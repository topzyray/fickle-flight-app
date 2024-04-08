import React from 'react';
import herobg from '../assets/images/hero-bg.png';

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/src/assets/images/hero-bg.png")',
        backgroundColor: '#1262af',
        // backgroundColor: 'linear-gradient(45deg, #1262af 48%, #299bd8 80%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backroundBlendMode: 'multiply',
        height: '84vh',
        width: '100%',
      }}
      className="flex justify-center items-center px-6 md:px-10 lg:px-28"
      // className="bg-hero bg-cover h-full w-full bg-gradient-to-r from-[#114F8B] to-[#2A9AD7] bg-blend-multiply"
    >
      <div className="w-full flex flex-col gap-11">
        <div className="text-white text-center">
          <h1 className="text-[61px] font-extrabold">
            Let’s explore & travel the world
          </h1>
          <p className="text-[24px] font-normal">
            Find the best destinations and the most popular stays!
          </p>
        </div>

        <div className="w-full bg-white text-black px-5 py-4 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Hero;
