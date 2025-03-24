import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import footerLogo from "../../assets/footer-logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary text-bgColor py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and Navigation */}
          <div className="mb-6 md:mb-0">
            <img src={footerLogo} alt="Footer Logo" className="w-40 mb-4" />
            <nav>
              <ul className="flex flex-wrap gap-4 text-sm">
                <li>
                  <Link to="/" className="hover:text-gray-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-gray-300">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-gray-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-gray-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Subscription and Social Media */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">
              Subscribe to our newsletter
            </h3>
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="bg-bgColor text-secondary p-2 rounded-l-md sm:rounded-l-md sm:rounded-none focus:outline-none mb-2 sm:mb-0"
              />
              <button className="bg-primary text-bgColor p-2 rounded-r-md sm:rounded-r-md sm:rounded-l-none hover:bg-primaryDark w-full sm:w-auto">
                Subscribe
              </button>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <div className="flex gap-4">
                <Link to="#" className="hover:text-gray-300">
                  Facebook
                </Link>
                <Link to="#" className="hover:text-gray-300">
                  Twitter
                </Link>
                <Link to="#" className="hover:text-gray-300">
                  Instagram
                </Link>
              </div>
            </div>
          </div>

          {/* Additional info or contact details (optional) */}
          <div className="mt-6 md:mt-0">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-sm">Kahtmanu, Nepal</p>
            <p className="text-sm">Email: sairash@gmail.com</p>
            <p className="text-sm">Phone: +977-9821838301</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center border-t pt-4 border-gray-700">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
