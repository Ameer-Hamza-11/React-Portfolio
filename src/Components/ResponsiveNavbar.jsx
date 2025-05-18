import { AnimatePresence, motion  } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'

const ResponsiveNavbar = ({open}) => {
  return (
<AnimatePresence mode='wait'>
{
    open && (
        <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{opacity: 1, y:0}}
        exit={{opacity: 0, y: -100}}
        className='absolute top-20 left-0 w-full h-screen -sm z-20 '
        >
        <div className="text-xl font-semibold uppercase  bg-orange-400 text-white py-10 m-6 rounded-3xl font-['Montserrat']">
            <ul className='flex flex-col items-center gap-10'>
             <NavLink to={'/'}><li>Home</li></NavLink>
             <NavLink to={'/about'}><li>About</li></NavLink>
             <NavLink to={'/projects'}><li>Projects</li></NavLink>
             <NavLink to={'/contact'}><li>Contact</li></NavLink>
            

            </ul>
        </div>
        </motion.div>
    )
}
</AnimatePresence>
  )
}

export default ResponsiveNavbar
