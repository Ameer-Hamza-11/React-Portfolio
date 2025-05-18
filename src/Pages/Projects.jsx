import React, { useState } from 'react';
import MegaProjects from './Projects/MegaProjects';
import MiniProjects from './Projects/MiniProjects';

const Projects = () => {
  const [isMega, setIsMega] = useState(true);

  return (
    <section className="bg-white py-10 px-4 md:px-8 lg:px-16 font-['Montserrat']">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
          My Projects
        </h2>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <button
            onClick={() => setIsMega(true)}
            className={`px-6 py-2 rounded-full transition duration-300 font-medium shadow-md ${
              isMega
                ? 'bg-orange-500 text-white hover:bg-orange-600'
                : 'bg-white border border-orange-300 text-orange-500 hover:border-orange-500'
            }`}
          >
            Mega Projects
          </button>
          <button
            onClick={() => setIsMega(false)}
            className={`px-6 py-2 rounded-full transition duration-300 font-medium shadow-md ${
              !isMega
                ? 'bg-orange-500 text-white hover:bg-orange-600'
                : 'bg-white border border-orange-300 text-orange-500 hover:border-orange-500'
            }`}
          >
            Mini Projects
          </button>
        </div>

        {/* Project Grid */}
        <div className="mt-2">
          {isMega ? <MegaProjects /> : <MiniProjects />}
        </div>
      </div>
    </section>
  );
};

export default Projects;
