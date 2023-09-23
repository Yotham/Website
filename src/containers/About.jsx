import { useState, useEffect, useContext } from 'react';
import './Home.css';
import Modal from 'react-modal';
import ContactForm from './contactForm';
import { HighlightContext } from './highlightContext';
import Resume from "./ResumeNew";

function About() {
  const { isContactClicked } = useContext(HighlightContext);
  const [resume, setResume] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)'  // this is a semi-transparent dark background
    },
    content: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      transition: 'opacity 0.2s',  // This is the transition for the modal.
      opacity: '0',               // The modal starts out completely transparent.
      border: '3px solid #cbd5e0',  // This is the new border matching the rest of the design.
      borderRadius: '10px',         // The border-radius to match the rest of your design.
      backgroundColor: '#f5f5f5',   // The background color to match the rest of your design.
      marginBottom: '-.5rem'             // Equal margin around the content.
    }
  };
  
  const openModal = () => {
    setModalIsOpen(true);
    setTimeout(() => {
      document.querySelector('.ReactModal__Content').style.opacity = '1';
    }, 0);
    document.body.style.overflow = 'hidden'; // disable scrolling
  };
  
  const closeModal = () => {
    document.querySelector('.ReactModal__Content').style.opacity = '0';
    setTimeout(() => {
      setModalIsOpen(false);
    }, 200); // same duration as the transition in customStyles
    document.body.style.overflow = 'auto'; // re-enable scrolling
  };
  
  useEffect(() => {
    // Fetch and set the resume data
    const fetchResumeData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/Yotham/resume/9d775c249ee930b7015053d96546980bc8366541/resume.json');
        const data = await response.json();
        setResume(data);
      } catch (error) {
        console.error('Error fetching resume data:', error);
      }
    };

    fetchResumeData();
  }, []);

  return (
    <div className="main">
        <div className="descriptionContainer">
            <center><p>About</p></center>
        </div>
    </div>
  );
}

export default About;
