import React from "react";
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

const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',  // 4 items per row
  gap: '16px',  // Adjust as needed
  justifyContent: 'center',
  paddingBottom: '50px',
};

const iconStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default Techstack;
