import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navHandler = () => {
    setNav(!nav);
  };

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Technologies",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Experience",
    },
    {
      id: 5,
      link: "Contacts",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 bg-head text-white px-4 fixed">
      <div>
        <h1 className="text-5xl font-portf ml-2">Portfolio</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li className="px-4 cursor-pointer text-gray font-medium hover:scale-105 duration-200">
            <Link to={link} smooth duration={500} >{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={navHandler}
        className="cursor-pointer pr-4 z-10 text-gray md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className="flex flex-col justify-center items-center absolute top-0 
        left-0 w-full h-screen bg-gradient-to-b from-grad1 to-grad2"
        >
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer text-gray hover:scale-105 duration-200 py-6 text-4xl">
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500} >{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
