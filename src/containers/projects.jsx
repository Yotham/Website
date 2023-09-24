import React, { useState } from 'react';
import Modal from 'react-modal';
import "./projects.css"

function Projects() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");

  const projects = [
    { name: "ShopEasy", description: "This is the description for ShopEasy project." },
    { name: "Best Professors List", description: "This is the description for Best Professors List project." },
    { name: "Class Countdown", description: "This is the description for Class Countdown project." },
    { name: "Video Duration Calculator", description: "This is the description for Video Duration Calculator project." },
    { name: "Craigslist Scraper", description: "This is the description for Craigslist Scraper project." },
    { name: "Instagram Automation", description: "This is the description for Instagram Automation project." },
    // Add more projects with name and description as needed
  ];

  const openModal = (projectName) => {
    setSelectedProject(projectName);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject("");
  };

  return (
    <div className = "Amain">
    <div style={gridContainerStyle}>
        {projects.map(project => (
            <div 
            key={project.name}
            className="test" 
            style={iconStyle}
            onClick={() => openModal(project.name)}
            >
            {project.name}
            </div>
        ))}

        <Modal 
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Project Description"
            className="modal-content"
            style={customModalStyles} 
            shouldCloseOnOverlayClick={true}
        >
            <h2 className="modal-header">{selectedProject}</h2>
            <p className="modal-description">{projects.find(p => p.name === selectedProject)?.description}</p>
        </Modal>
      </div>
    </div>
  );
}

const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',  // 4 items per row
    gap: '10px',  // Adjust as needed
    justifyContent: 'center',
    paddingBottom: '50px',
  };
  
  const iconStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const customModalStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        display: 'flex',              // Using flexbox to help with positioning
        flexDirection: 'column',      // Stack children vertically
        justifyContent: 'flex-start', // Start children at the top
        alignItems: 'center'          // Center children horizontally
    },
    content: {
      top: 'none',
      left: 'none',
      right: 'none',
      bottom: 'none',
      maxWidth: '500px',
      margin: 'auto',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch'
    }
  };
  

  
export default Projects;
