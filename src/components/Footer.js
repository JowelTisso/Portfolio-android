import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer(){
    
    return(
        <footer className="">
            <Container fluid={true}>
                <Row className=" p-2 justify-content-between">
                    <Col  className="p-0 text-secondary"   md={1} sm={3} xs={4}>
                        Jowel Tisso
                    </Col>
                    <Col className="p-0 d-flex justify-content-end text-secondary" md={3} sm={4} xs={4}>
                        This site was made by Jowel Tisso
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;