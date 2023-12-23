import React, { useState, useEffect } from "react";
import SapIcon from "./sap";


import {
    DiReact,
    DiMongodb,
    DiPostgresql,
    DiLinux
  } from "react-icons/di";
import {
    SiKubernetes,
    SiMicrosoftoffice
  } from "react-icons/si";

  

function Tools() {
  
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
    gridTemplateColumns: isMobile ? 'repeat(1, 1fr)' : 'repeat(5, 1fr)',
    gap: '16px',
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
    <div className = "tech-icons" style={iconStyle}><SapIcon/></div>
    <div className = "tech-icons" style={iconStyle}><DiReact/></div>
    <div className = "tech-icons" style={iconStyle}><DiPostgresql/></div>
    <div className = "tech-icons" style={iconStyle}><DiMongodb/></div>
    <div className = "tech-icons" style={iconStyle}><DiLinux/></div>
    </div>
  );
  
}


export default Tools;
