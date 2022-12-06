import "./index.scss";
import LogoA from "../../assets/images/A-logo.png";
import LogoZ from "../../assets/images/Z-logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo";
import Loader from "react-loaders";

function Home() {
  const [letterClass, setLetterClass] = useState("text-animate");

  const firstName = "ya ".split("");
  const lastName = "ayed".split("");
  const jobArray = "Front-End Developer".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoA} alt="logo" />
            <AnimatedLetters
              letterClass={letterClass}
              strArr={firstName}
              idx={15}
            />
            <img src={LogoZ} alt="logo" />
            <AnimatedLetters
              letterClass={letterClass}
              strArr={lastName}
              idx={18}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArr={jobArray}
              idx={23}
            />
          </h1>
          <Link to="/contact" exact className="contact-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Home;
