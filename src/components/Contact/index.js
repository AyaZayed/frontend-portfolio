import Loader from "react-loaders";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Contact() {
  const contactMe = "Contact Me".split("");
  const [letterClass, setLetterClass] = useState("text-animate");
  const formRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_q2sm1nu",
        "template_a8ex1ce",
        formRef.current,
        "A9_BTFoWDJZgjqS1C"
      )
      .then(
        () => {
          alert("Email sent successfully!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send email!");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArr={contactMe}
              idx={15}
              letterClass={letterClass}
            ></AnimatedLetters>
          </h1>
          <p>
            I live in Mansoura, Egypt but I'm willing to relocate. I would love
            to hear from you even if it's just to say hi. If you have some
            constructive criticism, please feel free to reach out.
          </p>
          <div className="contact-form">
            <form ref={formRef} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    value="SEND"
                    className="contact-button"
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="map-info">
          Aya Zayed
          <br />
          Mansoura, Egypt
          <br />
          <span>ayazayedofficial@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[31.0160174, 31.3198379]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[31.0160174, 31.3198379]}>
              <Popup>I live here, come over for a cup of tea :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Contact;
