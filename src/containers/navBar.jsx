// Navbar.js
import React from 'react';
import './navBar.css';  // Create and import a CSS file for styling

function Navbar() {
  const scrollTo = (sectionId, offset = 50) => {
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(sectionId);
      const sectionPos = section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: sectionPos, behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <a onClick={() => scrollTo('objective')}>Objective</a>
      <a onClick={() => scrollTo('education')}>Education</a>
      <a onClick={() => scrollTo('experience')}>Work Experience</a>
      <a onClick={() => scrollTo('coursework')}>Coursework Accomplishments</a>
      <a onClick={() => scrollTo('skills')}>Skills</a>
      <a onClick={() => scrollTo('activities')}>Activities</a>
      <a onClick={() => scrollTo('top')}>Contact</a>
    </nav>
  );
}

export default Navbar;

