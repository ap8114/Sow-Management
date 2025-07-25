import React, { useState, useRef, useEffect } from "react";
import { FaBell, FaSearch, FaUserCircle, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import logo from "./your-logo-path.png"; // Replace with your logo path

const Navbar = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar navbar-expand px-3 py-2  shadow-sm d-flex justify-content-between align-items-center fixed-top " >
      {/* Sidebar Toggle + Logo */}
      <div className="d-flex align-items-center gap-4">

          {/* Logo */}
        <img
          src="https://i.ibb.co/k2pNKGWG/sow-logo-sow-letter-sow-letter-logo-design-initials-sow-logo-linked-with-circle-uppercase-monogram-l.png"
          alt="Logo"
          className="navbar-logo img-fluid"
          style={{height:"50px" , width: "70px"}}
          />
        {/* Toggle Button - Always visible */}
        <button
          className="btn  text-white p-3"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>
      
      </div>

      {/* Search */}
      <div className="d-flex align-items-center">
        <div className="input-group d-none d-sm-flex">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Search"
            aria-label="Search"
          />
          <span className="input-group-text">
            <FaSearch />
          </span>
        </div>

        {/* Search icon for mobile */}
        <button className="btn btn-sm d-sm-none ms-2">
          <FaSearch />
        </button>
      </div>

      {/* Notification and User */}
      <div className="d-flex align-items-center gap-3 position-relative">
        {/* Notification */}
        <div className="position-relative">
          <FaBell size={18} className="text-white" />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            3
          </span>
        </div>

        {/* User Profile */}
        <div className="dropdown" ref={dropdownRef}>
          <div
            className="d-flex align-items-center gap-2 cursor-pointer"
            role="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <FaUserCircle size={24} className="text-white" />
            <div className="d-none d-sm-block">
              <small className="text-white mb-0">Welcome</small>
              <div className="text-white">Admin</div>
            </div>
          </div>

          {dropdownOpen && (
            <ul
              className="dropdown-menu show mt-2 shadow-sm"
              style={{
                position: "absolute",
                right: 0,
                minWidth: "180px",
                maxWidth: "calc(100vw - 30px)", // Prevent overflow on small screens
                zIndex: 1000,
              }}
            >
              <li>
                <Link className="dropdown-item" to="/profile">
                  Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="settings">
                  Settings
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="/">
                  Logout
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
