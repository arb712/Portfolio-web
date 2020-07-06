import React from "react";
import "../css/style.css";
import { Jumbotron, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Jumbotron className="jumbotronFooter">
      <Row>
        <Col className="text-center">
        <div className="container contactSec d-inline">
            <h4>You can find me at :</h4>
            <a href="https://github.com/arb712" className="contactIcon"><i className="fab fa-github"></i></a>
            <a href="https://gitlab.com/arb712" className="contactIcon"><i className="fab fa-gitlab"></i></a>
            <a href="https://www.instagram.com/ariqbimantoro/" className="contactIcon"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/ariq-bimantoro-b7301a194" className="contactIcon"><i className="fab fa-linkedin"></i></a>
            <a href="https://wa.me/6282185647628" className="contactIcon"><i className="fab fa-whatsapp"></i></a>
            <a href="http://line.me/ti/p/~ariqbimantoro" className="contactIcon"><i className="fab fa-line"></i></a>
            </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
        <div className="container contactSec d-inline">
            <h4>Contact Me :</h4>
        <a href="mailto:ariqbimantoro@gmail.com" className="contactIcon2"><i className="fa fa-envelope iconCont"></i>ariqbimantoro@gmail.com</a>
           <br></br>
            <a href="tel:082185647628" className="contactIcon2"><i className="fas fa-phone-square-alt iconCont"></i>082185647628</a>
        </div>
        </Col>
      </Row>
      <Row className="rowContact mt-5">
        <Col className="text-center mt-2">
          <div class="container footer-copyright text-center py-3">
            © 2020 Copyright:
            <a href="/#"> Ariq Bimantoro</a>
          </div>
        </Col>
        {/* <Col className="text-center">
            <div className="container contactSec d-inline">
            <h4>You can find me at :</h4>
            <a href="https://github.com/arb712" className="contactIcon"><i className="fab fa-github"></i></a>
            <a href="https://gitlab.com/arb712" className="contactIcon"><i className="fab fa-gitlab"></i></a>
            <a href="https://www.instagram.com/ariqbimantoro/" className="contactIcon"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/ariq-bimantoro-b7301a194" className="contactIcon"><i className="fab fa-linkedin"></i></a>
            <a href="https://wa.me/082185647628" className="contactIcon"><i className="fab fa-whatsapp"></i></a>
            <a href="http://line.me/ti/p/~ariqbimantoro" className="contactIcon"><i className="fab fa-line"></i></a>
            </div>
        </Col>
        <Col md={5}>

        </Col> */}
      </Row>
    </Jumbotron>
  );
};

export default Footer;
