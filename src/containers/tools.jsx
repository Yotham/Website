import React from "react";
import SapIcon from "./sap";

import {
    DiMongodb,
    DiPostgresql
  } from "react-icons/di";
import {
    SiKubernetes,
    SiMicrosoftoffice
  } from "react-icons/si";


function Tools() {
  return (
    <div style={gridContainerStyle}>
    <div className = "tech-icons" style={iconStyle}><DiPostgresql/></div>
    <div className = "tech-icons" style={iconStyle}><SapIcon/></div>
    <div className = "tech-icons" style={iconStyle}><DiMongodb/></div>
    <div className = "tech-icons" style={iconStyle}><SiKubernetes/></div>
    <div className = "tech-icons" style={iconStyle}><SiMicrosoftoffice/></div>
    </div>
  );
}

const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',  // 4 items per row
  gap: '16px',  // Adjust as needed
  justifyContent: 'center',
  paddingBottom: '50px',
};

const iconStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default Tools;
