import { useState, useEffect, useContext } from 'react';
import './Home.css';
import Modal from 'react-modal';
import ContactForm from './contactForm';
import { HighlightContext } from './highlightContext';
import Resume from "./ResumeNew";
import "./About.css"
import Techstack from "./Techstack"
import Frame from "./Frameworks"
import Tools from "./tools"
import {CgArrowRight} from "react-icons/cg";
import fam from "../assets/fam.jpg"

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
                <CgArrowRight/>Weightlifting
              </li>
              <li>
                <CgArrowRight/>Traveling
              </li>
              <li>
                <CgArrowRight/>Audiobooks
              </li>
            </ul>
          </p>
          </div>
          <img className = "Img" src ={fam} ></img>
        </div>
        </div>
        <div className = "Languages">
            <h1 className = "Title">Languages</h1>
        </div>
        <div className = "stackIcons">
          <Techstack />
        </div>
        <div className = "Languages">
            <h1 className = "Title">Technologies</h1>
        </div>
        <div className = "stackIcons">
          <Tools />
        </div>
    </div>
  );
}

export default About;
