import React from 'react';
import { Link } from 'react-router-dom';
import { TopbarData } from './TopbarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

const TopNavbar = () => {
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <nav className="top-nav ">
          {TopbarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {/* {item.icon} */}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
      </nav>
    </IconContext.Provider>
  );
};

export default TopNavbar;
