import React, { useState, useEffect } from "react";
import { CgCPlusPlus } from "react-icons/cg";
import CIcon from "./c"

import {
  DiJavascript1,
  DiPostgresql,
  DiMysql,
  DiHtml5,
  DiPython,
  DiCss3,
  DiJava,
  DiReact
  
} from "react-icons/di";
import{
    PiFileSqlThin
}from "react-icons/pi";

function Techstack() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(1, 1fr)' : 'repeat(4, 1fr)',
    gap: '16px',  // Adjust as needed
    justifyContent: 'center',
    paddingBottom: '50px',
  };
  
  const iconStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={gridContainerStyle}>
    <div className = "tech-icons" style={iconStyle}><DiPython /></div>
    <div className = "tech-icons" style={iconStyle}><DiJavascript1 /></div>
    <div className = "tech-icons" style={iconStyle}><PiFileSqlThin /></div>
    <div className=  "tech-icons" style={iconStyle}><CIcon/></div>
    <div className = "tech-icons" style={iconStyle}><CgCPlusPlus /></div>
    <div className = "tech-icons" style={iconStyle}><DiJava /></div>
    <div className = "tech-icons" style={iconStyle}><DiHtml5 /></div>
    <div className = "tech-icons" style={iconStyle}><DiCss3 /></div>
    </div>
  );

  
}


export default Techstack;
