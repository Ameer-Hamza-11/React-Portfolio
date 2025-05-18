import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white py-6 mt-16 font-['Montserrat']">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        
        {/* Branding */}
        <div>
          <h2 className="text-xl font-bold">Ameer Hamza</h2>
          <p className="text-sm">React Js Developer</p>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-4 text-sm">
          <NavLink to="/" className="hover:underline">Home</NavLink>
          <NavLink to="/about" className="hover:underline">About</NavLink>
          <NavLink to="/projects" className="hover:underline">Projects</NavLink>
          <NavLink to="/contact" className="hover:underline">Contact</NavLink>
        </div>

        {/* Copyright */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Ameer Hamza. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
