import React, { useState } from 'react';
import { FaCode } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { navbarMenu } from './UI/navbarData';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdMenu } from 'react-icons/md';
import ResponsiveNavbar from './ResponsiveNavbar';

const Navbar = () => {
  const [open, setOpen] = useState(false)


  return (
 <>
    <nav className="bg-[#1B2E35] text-white shadow-md font-['Montserrat']" >
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,5vw,96px)] py-[clamp(12px,2vw,40px)] 
      flex justify-between items-center py-8
      ">
        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <FaCode className="text-orange-400" />
          <p>Ameer</p>
          <p className="text-orange-400">Hamza</p>
        </div>
        <div className='hidden md:block'>
          <ul className='flex items-center gap-6 text-gray-600 font-bold'>
           {
            navbarMenu.map((item) => (
              <li key={item.id} >
                <NavLink
                  to={item.link}
                  // className={`inline-block py-1 px-3 hover:text-orange-400 font-semibold`}
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-400 font-bold inline-block py-1 px-3"
                      : "text-white hover:text-orange-400 transition duration-300 inline-block py-1 px-3"
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))
           }
          </ul>
        </div>
        <div className='flex items-center gap-4'>
         <NavLink target='_blank' to="https://www.linkedin.com/in/ameer-hamza-556717332/">
         <button className='text-2xl hover:bg-orange-500 cursor-pointer hover:text-white rounded-full p-2 transition duration-200'>
          <FaLinkedin/>
          </button>
         </NavLink>
         <NavLink target='_blank' to='https://github.com/Ameer-Hamza-11/'>
          <button className='text-2xl hover:bg-orange-500 cursor-pointer hover:text-white rounded-full p-2 transition duration-200'>
          <FaGithub />
          </button>
          </NavLink>
        </div>
        <div className='md:hidden' onClick={() => setOpen(!open)}>
        <MdMenu className='text-4xl cursor-pointer' />
        </div>
      </div>
    </nav>
    <ResponsiveNavbar open={open}/>

 </>
  );
};

export default Navbar;
