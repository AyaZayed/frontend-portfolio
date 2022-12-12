import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/AZ.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBriefcase,
  faEnvelope,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

function Sidebar() {
  const [isNavOpen, setIsNavOpen]= useState(false)

  return (

    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={Logo} alt="logo" />
        </Link>

        <FontAwesomeIcon
        className="bars"
        icon={faBars}
        size="2x"
        onClick={() => setIsNavOpen(!isNavOpen)}
      ></FontAwesomeIcon>
        
        <nav className={`nav-links ${isNavOpen ? "expanded" : null}`}>
          <div>
            <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="projects-link"
            to="/projects"
          >
            <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>
          </NavLink>
          </div>

          <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/aya-zayed-2000/"
            >
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/AyaZayed/"
            >
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
          </li>
          </ul>
          </nav>
          </div>
      </>
  );
}

export default Sidebar;
