import React from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
import Me from '../../image/me.jpg';

const Index = () => {

    return(
      <Container className="containerLanding">
          <Row>
    <Col className="text-center colLandingQuotes " sm={6}>
      <h1>Hello , I'm Ariq</h1>
      <p>I'm a full-stack developer wannabe.</p>
      <Button variant="outline-info"><a href="https://github.com/arb712">My Past Project</a></Button>{' '}
    </Col>
    <Col sm={6} className="d-flex justify-content-center">
      <img alt="#" src={Me} className="meImg"></img>
    </Col>
  </Row>
      </Container>
    )
}

export default Index;