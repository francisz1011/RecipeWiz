import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-scroll'

export const GetStartedButton = () => {
  return (
    <div>
        <Link to="RecipeGenerator" spy={true} smooth={true} offset={0} duration={500} onClick={Navbar}> 
    <button style={{ zIndex: 9999 }} className='bg-indigo-500 shadow-lg shadow-indigo-500/50 absolute mt-[400px] ml-[550px] text-white cursor-pointer  hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-3 text-center mr-3 md:mr-0 dark:bg-yellow-600 dark:hover:bg-violet-800 dark:focus:ring-blue-800' >
        Get Started
      </button>
    </Link>
    </div>
  )
}

export default GetStartedButton;