import React from "react";
import {
    DiReact,
    DiMongodb
  } from "react-icons/di";
import {
    SiKubernetes
  } from "react-icons/si";


function Frame() {
  return (
    <div style={gridContainerStyle}>
    <div className = "tech-icons" style={iconStyle}><DiReact/></div>
    </div>
  );
}

const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',  // 4 items per row
  gap: '16px',  // Adjust as needed
  justifyContent: 'center',
  paddingBottom: '50px',
};

const iconStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default Frame;
