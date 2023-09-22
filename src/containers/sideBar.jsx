import React, { useContext, useState } from 'react';
import { HighlightContext } from './highlightContext';
import './sideBar.css';

function Sidebar() {
  const { isContactClicked, setIsContactClicked } = useContext(HighlightContext);
  const [isOpen, setIsOpen] = useState(false);
  const scrollTo = (sectionId, offset = 0) => {
    if (sectionId === 'top') {
      setIsContactClicked(!isContactClicked); // Toggle the contact clicked state
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setIsContactClicked(false); // Clear the contact clicked state
      const section = document.getElementById(sectionId);
      const sectionPos = section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: sectionPos, behavior: 'smooth' });
    }
  };


  return (
    <nav>
        <div className="sidebar">
            <a onClick={() => scrollTo('top')}>Contact</a>
            <a onClick={() => scrollTo('objective')}>Objective</a>
            <a onClick={() => scrollTo('education')}>Education</a>
            <a onClick={() => scrollTo('experience')}>Work Experience</a>
            <a onClick={() => scrollTo('coursework')}>Coursework Accomplishments</a>
            <a onClick={() => scrollTo('skills')}>Skills</a>
            <a onClick={() => scrollTo('honors')}>Honors</a>
            <a onClick={() => scrollTo('activities')}>Activities</a>
        </div>
    </nav>
  );
}

export default Sidebar;
