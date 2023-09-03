import React from 'react';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="bg-white  fixed w-full z-20 top-0 left-0 border-b  opacity-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        
        <div className="flex md:order-2">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Sign up</button>
        </div>
        <div className='h-[40px] w-[40px] ml-6'>
          <img src='/public/chef.png' alt='logo'/>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="gap-[150px] text-2xl flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800  dark:border-gray-700 ">
            <li>
              <Link to="home"  spy={true} smooth={true} offset={0} duration={500} onClick={Navbar} className="block py-2 pl-3 pr-4  bg-blue-700 md:bg-transparent  md:p-0 md:dark: text-violet-800 rounded-lg p-2 font-extrabold cursor-pointer">RecipeWiz</Link>
            </li>
            <li>
              <Link to="about"  spy={true} smooth={true} offset={-50} duration={500} onClick={Navbar} className="block py-2 pl-3 pr-4 text-violet-800 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:dark:hover:text-yellow-500  dark:hover-bg-gray-700 dark:hover-text-white  dark:border-gray-700 cursor-pointer font-mono font-bold">About</Link>
            </li>
            <li>
            <Link to="RecipeGenerator" spy={true} smooth={true} offset={0} duration={500} onClick={Navbar} className="block py-2 pl-3 pr-4 text-violet-800 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:dark:hover:text-yellow-500  dark:hover-bg-gray-700 dark:hover-text-white md:dark:hover-bg-transparent dark:border-gray-700 cursor-pointer font-mono font-bold">AI Recipe Generator</Link>
            </li>
            <li>
            <Link to="recipes"  spy={true} smooth={true} offset={0} duration={500} onClick={Navbar} className="block py-2 pl-3 pr-4 text-violet-800 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:dark:hover:text-yellow-500 dark:hover-bg-gray-700 dark:hover-text-white md:dark:hover-bg-transparent dark:border-gray-700 cursor-pointer font-mono font-bold">Recipes</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;
