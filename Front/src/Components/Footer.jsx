import React, { useState } from "react";
import logo from "../assets/logo1.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-6">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-evenly items-start lg:items-center">
          {/* Logo */}
          <div className="mb-2 lg:mb-0">
            {" "}
            <img src={logo} alt="Dinedeal logo" className="h-8" />
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-sm text-gray-700">
            {" "}
    
            {/* About Dinedeal */}
            <div>
              <h3 className="font-bold uppercase text-gray-800 mb-2">
                About Dinedeal
              </h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    Who We Are
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Work With Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Investor Relations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Report Fraud
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Press Kit
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            {/* Dineverse */}
            <div>
              <h3 className="font-bold uppercase text-gray-800 mb-2">
                Dineverse
              </h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    DineDeal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blinkit
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Feeding India
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Hyperpure
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    DineDeal Live
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Weather Union
                  </a>
                </li>
              </ul>
            </div>
            {/* For Restaurants */}
            <div>
              <h3 className="font-bold uppercase text-gray-800 mb-2">
                For Restaurants
              </h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    Partner With Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Apps For You
                  </a>
                </li>
              </ul>
            </div>
            {/* Learn More */}
            <div>
              <h3 className="font-bold uppercase text-gray-800 mb-2">
                Learn More
              </h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col lg:flex-row justify-between items-center">
          {/* Social Links */}
          <div className="flex space-x-4 mb-4 lg:mb-0">
            {" "}
            {/* Reduced margin-bottom */}
            <a href="#">
              <i className="fab fa-linkedin text-gray-700 hover:text-gray-900"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram text-gray-700 hover:text-gray-900"></i>
            </a>
            <a href="#">
              <i className="fab fa-x-twitter text-gray-700 hover:text-gray-900"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook text-gray-700 hover:text-gray-900"></i>
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 text-center text-sm text-gray-500 border-t pt-4">
          {" "}
          {/* Reduced margin-top */}
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy, and Content Policies. All trademarks
          are properties of their respective owners. 2008-2024 © DineDeal™ Ltd.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
