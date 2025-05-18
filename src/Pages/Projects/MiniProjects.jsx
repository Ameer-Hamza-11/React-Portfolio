import React from 'react';
import MegaProjectsData from './MiniProjects.json';
import { NavLink } from 'react-router-dom';

const MiniProjects = () => {
  return (
    <section className="bg-white py-12 font-['Montserrat']">
      <h2 className="text-4xl font-bold text-center text-orange-500 mb-10">
        Mini Projects
      </h2>

      <div className="grid gap-10 px-4 sm:px-8 md:px-12 lg:px-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {MegaProjectsData.map(({ id, title, description, image, link }) => (
          <div
            key={id}
            className="relative bg-white rounded-3xl shadow-xl border border-orange-100 hover:shadow-orange-200 hover:-translate-y-2 transition-all duration-300"
          >
            <figure className="rounded-t-3xl overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
              />
            </figure>

            <div className="p-6">
              <h3 className="text-2xl font-semibold text-orange-600 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {description.length > 120 ? description.slice(0, 120) + '...' : description}
              </p>

              <NavLink to={link} target="_blank">
                <button className="w-full py-2 mt-2 bg-orange-500 text-white rounded-xl font-medium hover:bg-orange-600 transition duration-300 shadow hover:shadow-lg">
                  View Project
                </button>
              </NavLink>
            </div>

    
            <div className="absolute top-3 right-3 bg-orange-100 text-orange-500 px-3 py-1 text-xs font-bold rounded-full shadow-sm">
              Mega
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MiniProjects;
