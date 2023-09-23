import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  DiAngularSimple,
  DiReact,
  DiMongodb
} from "react-icons/di";
import {
  SiSpringboot,
  SiApache
} from "react-icons/si";

function Frame() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApache />
      </Col>
    </Row>
  );
}

export default Frame;