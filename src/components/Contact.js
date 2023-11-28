import React from "react";
import "../styles/contact.css";
import contactimg from "./images/contactimg.webp";
import { IoMdMail, IoMdCall, IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from 'react-icons/io'
import { IoPerson } from 'react-icons/io5'
import { FiCodesandbox } from 'react-icons/fi'

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__card">
        <div className="contact-info">
          <h2><span>Let's </span> talk</h2>
          <p><IoPerson color="black"/> Varad Patil</p>
          <p><a href="mailto:varadapatil123@gmail.com" target="_blank"><IoMdMail color="black"/>varadapatil123@gmail.com</a></p>
          <p><a href="tel:9356610789" target="_blank"><IoMdCall color="black"/>+91 9356610789</a></p>
          <p><a href="https://varadportfolio.web.app/" target="_blank"><FiCodesandbox color="black"/> Portfolio: <span style={{color: "#3AD137"}}>varadportfolio.web.app</span></a></p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/varad-patil-web-dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin size={30} color="blue"/>
            </a>
            <a
              href="https://www.instagram.com/varad__patil_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram size={30} color="red"/>
            </a>
            <a
              href="https://github.com/DevVaradPatil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub size={30} color="black"/>
            </a>
          </div>
        </div>
        <div className="vector-image">
          <img src={contactimg} alt="Vector Image" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
