import React from 'react';
import { Container ,Row,Col} from 'react-bootstrap';

import '../css/style.css';

const Index = () => {
    return(
        <Container className="pb-5" id="iCanDo">
            <Row>
                <Col lg={12} className="text-center mt-5 whatText">
                    What i can do.
                </Col>
            </Row>
            <Row className="d-flex align-content-center text-center pt-5 mt-5">
                <Col xs={3}>
                </Col>
                <Col xs={3} className="text-center whatSubText1">
                <i className="codeIcon fa fa-window-maximize"></i>
                </Col>
                <Col xs={4} className="text-center whatSubText">
                    <h2>Build Website</h2>
                    <h2>Based on ReactJS</h2>
                </Col>
                <Col xs={3}>
                </Col>
            </Row>
            <Row className="d-flex align-content-center text-center pt-5 mt-5">
                <Col xs={3}>
                </Col>
                <Col xs={4} className="text-center whatSubText">
                    <h2>Build Responsive Website</h2>
                </Col>
                <Col xs={3} className="text-center whatSubText1">
                <i className="fas fa-tablet-alt codeIcon"></i>
                </Col>
                <Col xs={3}>
                </Col>
            </Row>
        </Container>
    )
}

export default Index;