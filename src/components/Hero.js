import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props) {

    return(
        <Container fluid={true} className=" " >
            <Row className=" justify-content-center">
                <Col className=" " md={8} sm={12}>
                  
                    <h1 className={" font-weight-bolder hero-title text-" + props.color}>{props.title}</h1>
                    <h2 className=" font-weight-light text-secondary">{props.subTitle}</h2>
                    <h3 className="lead font-weight-light text-secondary">{props.text}</h3>
                  
                </Col>
            </Row>
        </Container>
    );
}

export default Hero;