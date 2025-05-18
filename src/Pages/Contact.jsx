import React from 'react';
import { Mail, Phone, User, Linkedin } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Contact = () => {
  return (
    <section className="bg-white py-16 px-6 sm:px-10 md:px-20 font-['Montserrat']">
      <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">Contact Me</h2>

      <div className="max-w-3xl mx-auto bg-orange-50 border border-orange-200 rounded-3xl shadow-xl p-8 space-y-6">
        <div className="flex items-center gap-4">
          <User className="text-orange-500" />
          <span className="text-lg font-medium text-gray-800">Ameer Hamza</span>
        </div>

        <div className="flex items-center gap-4">
          <Phone className="text-orange-500" />
          <span className="text-lg text-gray-800">+92 326 07 844 63</span>
        </div>

        <div className="flex items-center gap-4">
          <Mail className="text-orange-500" />
          <span className="text-lg text-gray-800">ameerhamza.saati@gmail.com</span>
        </div>

        <div className="flex items-center gap-4">
          <Linkedin className="text-orange-500" />
          <NavLink
            to="https://www.linkedin.com/in/ameer-hamza-556717332/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-orange-600 font-medium hover:underline"
          >
            linkedin.com/in/ameer-hamza
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Contact;
