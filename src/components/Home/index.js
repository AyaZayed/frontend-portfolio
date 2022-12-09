import "./index.scss";
import LogoA from "../../assets/images/A.png";
import LogoZ from "../../assets/images/Z.png";
import Aya from "../../assets/images/blurred.png";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
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

  const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Aya Zayed Resume.pdf';
                alink.click();
            })
        })
    }

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
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
          <a className="contact-button" onClick={onButtonClick}>
            DOWNLOAD CV
          </a>
        </div>
        <div className="logo-container">
        <img src={Aya} alt="aya's image" className="solid-logo"/>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Home;
