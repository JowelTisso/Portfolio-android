import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import github from '../assets/images/github.png';
import instagram from '../assets/images/instagram.png';
import twitter from '../assets/images/twitter.png';
import linkedin from '../assets/images/linkedin.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class ContactPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name] : value
        })

    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            disabled:true,
        
        });

      
    }


    render() {
        return (
            <div className="contact-container  "  id = {this.props.id} >
                
                <Hero title="Contact Me" color="warning"/>
                <Content>
                    <Container className=" " fluid={true}>
                        <Row className="contact-handle mx-auto  ">
                            <Col className=" my-auto justify-content-center ">
                                <a href="https://github.com/JowelTisso" target="_blank" rel="noopener noreferrer">
                                    <img className=" social m-3 " src={github} alt={github} />
                                </a>
                                <a href="https://instagram.com/jowel_is_dev" target="_blank" rel="noopener noreferrer">
                                    <img className=" social m-3" src={instagram} alt={instagram} />
                                </a>
                                <a href="https://twitter.com/joweltisso" target="_blank" rel="noopener noreferrer">
                                    <img className=" social m-3" src={twitter} alt={twitter} />
                                </a>
                                <a href="https://linkedin.com/in/joweltisso" target="_blank" rel="noopener noreferrer">
                                    <img className=" social m-3" src={linkedin} alt={linkedin} />
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </Content>
            </div>
        );

    }
}

export default ContactPage;