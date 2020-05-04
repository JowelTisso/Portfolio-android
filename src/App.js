import React from 'react';
import './App.css';
import { Link } from 'react-scroll';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectPage from './pages/ProjectPage';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import symbols from './assets/images/symbols3.png';
import bracket1 from './assets/images/parallaxicon/coding1.png';
import bracket2 from './assets/images/parallaxicon/coding2.png';
import bracket3 from './assets/images/parallaxicon/coding3.png';
import bracket4 from './assets/images/parallaxicon/coding4.png';
import android from './assets/images/android.png';
import reacticon from './assets/images/reacticon2.png';
import background from './assets/images/as.jpg'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Jowel Tisso',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Android & Front-end Developer',
        subTitle: 'My Projects in the journey of being relentless',
        text: 'Check out my projects below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }

    }
  }

  render() {
    return (

      <div className="App bottom-container p-0" bg="dark" fluid="true">

        <Navbar className="" collapseOnSelect fixed="top" bg="dark" variant="dark" expand="lg" >
          <Navbar.Brand >Jowel Tisso </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto " >

            <Link

                activeClass="active"
                to="homepage"
                
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}> <Nav.Link href="#"> Home </Nav.Link> </Link>
                <Link

                activeClass="active"
                
                to="projectpage"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}> <Nav.Link href="#"> Projects </Nav.Link> </Link>

                <Link

                activeClass="active"
                
                to="aboutpage"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>  <Nav.Link href="#"> About </Nav.Link> </Link>

                <Link

                activeClass="active"
                
                to="contactpage"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>  <Nav.Link href="#"> Contact </Nav.Link> </Link>

            </Nav>
          </Navbar.Collapse>

        </Navbar>

            <div className="nav-menu " />

            <HomePage
              title={this.state.home.title}
              subTitle={this.state.home.subTitle}
              text={this.state.home.text}
              id="homepage"
            />
            <ProjectPage
              id="projectpage"
            />

            <AboutPage
              id="aboutpage"
            />


            <ContactPage
              id="contactpage"
            />
            <Footer />




        {/* <Parallax ref={ref => (this.parallax = ref)} className=" bg-dark  " pages={5.5} >

          <ParallaxLayer offset={0} speed={0} factor={6} style={{ backgroundImage: `url(${background})`,height:'100%', backgroundSize: 'cover',backgroundPosition:'center' }}/>
          <ParallaxLayer offset={0} speed={1} factor={6} style={{ backgroundImage: `url(${symbols})`,height:'100%', backgroundSize: 'auto',backgroundPosition:''}}/>


            <ParallaxLayer
              className="border-secondary border"
              offset={0}
              speed={0}
              style={{ backgroundColor: '' }}
               >
             

            </ParallaxLayer>

            <ParallaxLayer
              className="border border-primary"
              offset={1.1}
              speed={0}
              style={{ backgroundColor: '#' }}
               >
              
            </ParallaxLayer>
            <ParallaxLayer
              className="border border-primary"
              offset={2.2}
              speed={0}
              style={{ backgroundColor: '#' }}
              
            >
            </ParallaxLayer>

            <ParallaxLayer
              className="border border-primary"
              offset={3.5}
              speed={0}
              style={{ backgroundColor: '#' }}
              
            >
            

            </ParallaxLayer>


            <ParallaxLayer
              className="border border-primary"
              offset={4.6}
              speed={0}
              style={{ backgroundColor: '#' }}
               >

            
            </ParallaxLayer>

           

         


        



        </Parallax> */}


      </div>


    );

  }
}

export default App;
