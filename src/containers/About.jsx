import { useState, useEffect, useContext } from 'react';
import './Home.css';
import Modal from 'react-modal';
import ContactForm from './contactForm';
import { HighlightContext } from './highlightContext';
import Resume from "./ResumeNew";
import "./About.css"
import Techstack from "./Techstack"
function About() {

  return (
    <div className="Amain">
      <div className = "styleMain">
        <div className="Description">
            <h1 className = "About">About</h1> 
            <h1 className = "Me">Me</h1>
        </div>
        <div className = "content">
          <div className = "pGraph">
          <p className = "pMain" >My name is <p className = "pBold">Yotham Sage</p>.
          I am completing my senior year at Rennselear Polytechnic Institute, where I am studying <p className = "pBold">Computer Science</p>.
          I recently completed an internship at <p className = "pBold">GE Vernova</p> as a Digital Technology Intern, where I worked on a team developing project solutions and automating tasks.</p>
          <p>Besides coding other activities that I love to do are!
            <ul className = "ULa">
              <li>
                Weightlifting
              </li>
              <li>
                Traveling
              </li>
              <li>
                Audiobooks
              </li>
            </ul>
          </p>
          </div>
          <img className = "Img" src ="https://cc-prod.scene7.com/is/image/CCProdAuthor/What-is-Stock-Photography_P1_mobile?$pjpeg$&jpegSize=200&wid=720" ></img>
        </div>
        </div>
        <div className = "Languages">
            <h1 className = "Title">Languages</h1>
        </div>
        <div className = "stackIcons">
          <Techstack />
        </div>
    </div>
  );
}

export default About;
