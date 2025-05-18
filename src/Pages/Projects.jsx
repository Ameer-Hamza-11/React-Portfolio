import React, { useState } from 'react';
import MegaProjects from './Projects/MegaProjects';
import MiniProjects from './Projects/MiniProjects';

const Projects = () => {
  const [megaProjects, setMegaProjects] = useState(false);

  return (
    <section className="bg-white py-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
          My Projects
        </h2>

        <button
          onClick={() => setMegaProjects(!megaProjects)}
          className="mb-4 bg-orange-500 text-white px-6 py-2 rounded-xl shadow hover:bg-orange-600 transition duration-300"
        >
          {megaProjects ? 'Mega Projects' : 'Mini Projects'}
        </button>

        <div className="mt-2">
          {megaProjects ? <MiniProjects /> :  <MegaProjects />}
        </div>
      </div>
    </section>
  );
};

export default Projects;
