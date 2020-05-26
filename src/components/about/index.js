import React from 'react'
import '../css/style.css';
import { Row,Col} from 'react-bootstrap';



const Index = () => {
    return(
        <div className="text-center mt-5 aboutContainer">
            <Row>
                <Col lg={4}>
                </Col>
            <Col lg={4} id="About">
            <h1>Hi,</h1>
            <br/>
                <p>I'm trying to be Full-stack Developer in Batam,Kepulauan Riau.I have a passion to build something amazing and learn something new.</p>
                <p>Now , i'm taking a scholarship from Glints Academy x Impact Byte for Full-stack Dev class.</p>
                <p>I'm a kind of people , when working on project , gonna worked on it for the whole day.</p>
            </Col>
            <Col lg={4}></Col>
            </Row>
        </div>
    )
}

export default Index;