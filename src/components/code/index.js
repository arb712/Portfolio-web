import React from "react";
import "../css/style.css";
import { Jumbotron, Row, Col } from "react-bootstrap";
import csharp from "../../image/csharp.svg";
const myCode = () => {
  return (
    <Jumbotron className="text-center jumbotronCode" id="skill">
      <h1>Programming Knowledge</h1>
      <p>A few programming languange that i've used it so far.</p>
      <Row>
        <Col className="colSkill" md={4}>
          <i className="fab fa-js codeJs"></i>
          <p>
            <strong>Javascript</strong>
          </p>
        </Col>
        <Col md={4}>
          <i className="fab fa-php codePhp"></i>
          <p>
            <strong>PHP</strong>
          </p>
        </Col>
        <Col md={4}>
          <img src={csharp} alt="C# logo" className="codeSharp"></img>
          <p>
            <strong>C#</strong>
          </p>
        </Col>
      </Row>
      <Row>
        
      </Row>
    </Jumbotron>
  );
};

export default myCode;
