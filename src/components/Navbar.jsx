import logo from "../assets/logos/TCLogoOnly.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  let [isActive, setIsActive] = useState(false);

  const toggleActive = (e) => {
    setIsActive(!isActive);
  };

  return (
    <nav className="h-10vh navbar p-0 navbar-light bg-light shadow-lg">
      <div className="container-fluid h-100 p-0 d-flex justify-content-center">
        <span className="navbar-brand m-0 p-0 h1">
          <img src={logo} className="h-10vh" alt="TrueCoders" />
          <button
            className={`navbar-burger ${isActive ? "is-active" : null}`}
            aria-label="menu"
            aria-expanded={isActive}
            onClick={toggleActive}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </span>
        <div id="mainNav" className="navbar-menu">
          <ul className="navbar-start">
            <li>
              <NavLink to="/" className="navbar-item">
                Exercises
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="navbar-item">
                Coding Questions
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="navbar-item">
                Challenges
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
