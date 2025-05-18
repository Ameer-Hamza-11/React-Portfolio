import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white text-black">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <figure className="w-3/4 md:w-full flex justify-center">
            <img src="../src/assets/HeroImg.png" alt="Hero" className="w-full h-auto max-w-md" />
          </figure>
        </div>

        {/* Text Section */}
    {/* Text Section */}
<div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left space-y-4">
  <h1 className="text-4xl md:text-5xl font-bold text-orange-500 leading-tight">
    Hey There, <br />
    I’m Ameer Hamza —
  </h1>
  <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
    A Passionate React Developer
  </h2>
  <p className="text-lg md:text-xl text-gray-700">
    I specialize in building dynamic, responsive, and interactive user interfaces using React and Tailwind CSS. I love turning ideas into visually appealing and functional web experiences.
  </p>
  <button className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition duration-300">
    <NavLink to="/projects" className="flex items-center cursor-pointer">
      View My Work
    </NavLink>
  </button>
</div>


      </div>
    </div>
  );
};

export default Home;
