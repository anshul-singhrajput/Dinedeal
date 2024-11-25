import React, { useState, useContext } from "react";
import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
import { DineContext } from "../context/DineContext";

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(DineContext); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const linkStyle = "hover:text-blue-600 transition duration-300";

  return (
    <nav className="bg-white text-black p-4 shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link to="/">
            <img className="h-10" src={logo} alt="logo" />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link to="/" className={linkStyle}>
            Offer
          </Link>
          {isLoggedIn ? (
            <>
              <Link to="/deals" className={linkStyle}>
                Deals
              </Link>
              <button
                onClick={logout}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Login
            </Link>
          )}
        </div>

        {/* Hamburger Menu */}
        <button
          className="lg:hidden block text-black focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col items-center space-y-4 p-4">
            <Link to="/" className={linkStyle} onClick={toggleMenu}>
              Offer
            </Link>
            {isLoggedIn ? (
              <>
                <Link to="/deals" className={linkStyle} onClick={toggleMenu}>
                  Deals
                </Link>
                <button
                  onClick={() => {
                    logout();
                    toggleMenu(); // Close the menu on logout
                  }}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                onClick={toggleMenu}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
