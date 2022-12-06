import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3,
  faHtml5,
  faReact,
  faJsSquare,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

function About() {
  const aboutMe = "About Me".split("");
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArr={aboutMe}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I'm a front-end web developer with a passion for creating beautiful
            and meaningful web experiences. I have graduated from the University
            of Mansoura with a degree in Computer Science Bioinformatics major.
          </p>
          <p>
            I have been learning and trying my way around front-end technologies
            for a few years now. I'm currently working with React.js and trying
            to be the best I can be at it.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cube-spinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faBootstrap} color="#cb58de" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default About;
