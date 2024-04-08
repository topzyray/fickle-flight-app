import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { VscBellDot } from 'react-icons/vsc';
import tope from '../assets/images/tope.jpg';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky z-50 top-0 drop-shadow-xl py-3 md:py-8">
      <nav className="relative flex justify-between items-center py-1 px-6 md:px-10 lg:px-28">
        <h1 className="text-[22px] md:text-[32px] font-extrabold gradient-text">
          Fickleflight
        </h1>
        {/* Mobile Menu Hamburger */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden cursor-pointer bg-white hover:bg-primary hover:rounded-lg"
        >
          {!menuOpen ? (
            <AiOutlineMenu
              size={35}
              className="text-primary hover:text-white "
            />
          ) : (
            <AiOutlineClose
              className="text-primary hover:text-white hover:rounded-lg p-1"
              size={35}
            />
          )}
        </div>

        {/* Large screen menu */}
        <ul className="hidden md:flex items-center text-base font-medium gap-8">
          <li className="cursor-pointer hover:text-primary hover:underline">
            Explore
          </li>
          <li className="cursor-pointer hover:text-primary hover:underline">
            Search
          </li>
          <li className="cursor-pointer hover:text-primary hover:underline">
            Hotels
          </li>
          <li className="cursor-pointer hover:text-primary hover:underline">
            Offers
          </li>
          <li className="cursor-pointer">
            <VscBellDot className="text-2xl" />
          </li>
          <li className="cursor-pointer">
            <img src={tope} alt="Img" className="w-10 h-10 rounded-full" />
          </li>
        </ul>

        {/* Mobile screen menu */}
        {menuOpen && (
          <ul
            className={
              menuOpen
                ? `md:hidden absolute flex flex-col text-center w-full top-[3.4rem] right-0 bg-white shadow-xl px-8 py-12 space-y-6 ease-in duration-500`
                : `top-[-100%] ease-out duration-700`
            }
          >
            <NavLink
              onClick={() => setMenuOpen(false)}
              to="/"
              className={({ isActive }) => (isActive ? 'text-primary' : '')}
            >
              <li className="hover:text-primary hover:underline cursor-pointer">
                Explore
              </li>
            </NavLink>
            <li
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer hover:text-primary hover:underline"
            >
              Search
            </li>
            <li
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer hover:text-primary hover:underline"
            >
              Hotels
            </li>
            <li
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer hover:text-primary hover:underline"
            >
              Offers
            </li>
            <li
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer mx-auto"
            >
              <VscBellDot className="text-2xl" />
            </li>
            <li
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer mx-auto"
            >
              <img src={tope} alt="Img" className="w-10 h-10 rounded-full" />
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
