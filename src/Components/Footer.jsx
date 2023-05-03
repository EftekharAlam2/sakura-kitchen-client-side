import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Sakura Kitchen</h3>
              <p className="text-gray-400">Authentic Japanese Cuisine</p>
            </div>
            <nav className="space-x-4">
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/blogs"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Blogs
              </Link>
              <Link
                to="/login"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Register
              </Link>
            </nav>
          </div>
          <hr className="border-gray-700 my-6" />
          <p className="text-center text-gray-400">
            © 2023 Sakura Kitchen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
