import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import myImage from "../assets/Resume.jpg";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../assets/Resume.pdf";
import './ResumeNew.css';

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">

        <Row className="resume" style={{ justifyContent: "center" }}>
          <img className = "resumePic" src={myImage} alt="Description of Image"></img>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <center><Button 
            className = "ResumeDownload"
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
          <AiOutlineDownload />
            &nbsp;Download Resume
          </Button></center>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
