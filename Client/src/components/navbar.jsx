import { NavLink } from 'react-router-dom';
import {  FaBars } from 'react-icons/fa';
import Logo from '../assets/Logo.png';
import { useState } from 'react';
import { FaCalculator } from 'react-icons/fa';
import { FaCoins} from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';


const Navbar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <>
 <aside className="flex justify-between items-center fixed top-0 left-0 w-screen h-[10vh] bg-[rgb(84,84,84)] shadow-sm shadow-gray-300 z-10">
          <div className="w-[10vh] ml-4">
            <a href="/" className=''>
              <img src={Logo}  alt="Logo de la aplicación" />
            </a>
          </div>
          <div className='h-full mr-8 text-[rgb(255,222,89)] hover:text-orange-600'>
            <button onClick={()=>setShowNav(!showNav)} className='h-full text-3xl'>
              <FaBars />
            </button>
          </div>
          <nav style={showNav ? {transform:"translate(0, 0)"} : {transform:"translate(100vw, 0)"}} className='bg-white absolute top-[10vh] right-0 h-[90vh] border border-solid border-t-gray-400 rounded-r-lg border-r-gray-400 -translate-x-full transition-all overflow-auto shadow-xl shadow-gray-700 w-1/2 md:w-1/4'>
            <NavLink to="/home" onClick={()=>setShowNav(!showNav)} className="flex items-center text-gray-600 py-4 pl-6 hover:text-orange-600 mb-2">
              <FaCoins className="mr-4 text-2xl" />
              Home
            </NavLink>
            <NavLink to="/investment" onClick={()=>setShowNav(!showNav)} className="flex items-center text-gray-600 py-4 pl-6 hover:text-orange-600 mb-4">
              <FaCalculator className="mr-2 text-2xl" />
              Investment Calculator
            </NavLink>
            <NavLink to="/" onClick={()=>setShowNav(!showNav)} className="flex items-center text-gray-600 py-4 pl-6 hover:text-orange-600 mb-4">
              < FaSignOutAlt className="mr-2 text-2xl" />
                Exit
            </NavLink>
          </nav>
        </aside>
    </>
  );
};

export default Navbar;