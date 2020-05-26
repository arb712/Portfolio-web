import React from "react";
import "../css/style.css";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import Shilta from "../../image/shilta.png";
import Hotel from "../../image/hotel.jpeg";
import Evenity from "../../image/evenity.png";
const myWork = () => {
  return (
    <Container className="mb-5" id="work">
      <div className="d-flex justify-content-center">
      <h1 className="mt-5 mb-5 underlineMain">My Work</h1>
      </div>
      
      <Row className="rowWorkCard">
        <Col lg={6} className="colWorkCard">
          <Card style={{ width: "25% !important" }} className="mainCard">
            <Card.Img variant="top" src={Shilta} />
            <Card.Body>
              <Card.Title>Shilta E-Commerce Demo</Card.Title>
              <Card.Text>
                My first project website , build with HTML , CSS & Bootstrap 4
                with PHP Log In
              </Card.Text>
              <Button variant="primary" className="buttonBt">
                <a href="https://github.com/arb712/shilta-e-commerce-template">
                  <i className="fab fa-github pr-2"></i>Git Hub
                </a>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} className="colWorkCard">
          <Card style={{ width: "25% !important" }} className="mainCard">
            <Card.Img variant="top" src={Hotel} />
            <Card.Body>
              <Card.Title>Hotel Admin Side</Card.Title>
              <Card.Text>
                Admin side Hotel Reservation with login admin , cancel , reject , accept booking.
              </Card.Text>
              <Button variant="primary" className="buttonBt">
                <a href="https://github.com/arb712/Hotel-reservation-with-php">
                  <i className="fab fa-github pr-2"></i>Git Hub
                </a>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} className="colWorkCard">
          <Card  style={{ width: "25% !important" }} className="mainCard">
            <Card.Img variant="top" src={Evenity} />
            <Card.Body>
              <Card.Title>Evenity</Card.Title>
              <Card.Text>
                This is Our Final Project for Glints Academy x Impact Byte.
                Worked by Me and My team.
              </Card.Text>
              <Button variant="primary" className="buttonBt">
                <a href="https://github.com/arb712/frontend">
                  <i className="fab fa-github pr-2"></i>Git Hub
                </a>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default myWork;
