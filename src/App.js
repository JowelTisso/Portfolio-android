import React from "react";
import "./App.css";
import { Link } from "react-scroll";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";
// import ProjectPageWeb from "./pages/ProjectPageWeb";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Jowel Tisso",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "Android & Front-end Developer",
        subTitle: "My Projects in the journey of being relentless",
        text: "Check out my projects below",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Let's Talk",
      },
    };
  }

  render() {
    return (
      <div className="App bottom-container p-0" bg="dark" fluid="true">
        <Navbar
          className=""
          collapseOnSelect
          fixed="top"
          bg="dark"
          variant="dark"
          expand="lg"
        >
          <Navbar.Brand>Jowel Tisso </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto ">
              <Link
                activeClass="active"
                to="homepage"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {" "}
                <Nav.Link href="#"> Home </Nav.Link>{" "}
              </Link>
              <Link
                activeClass="active"
                to="projectpage"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {" "}
                <Nav.Link href="#"> Android </Nav.Link>{" "}
              </Link>
              {/* <Link
                activeClass="active"
                to="projectpageweb"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {" "}
                <Nav.Link href="#"> Web </Nav.Link>{" "}
              </Link> */}

              <Link
                activeClass="active"
                to="aboutpage"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {" "}
                <Nav.Link href="#"> About </Nav.Link>{" "}
              </Link>

              <Link
                activeClass="active"
                to="contactpage"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {" "}
                <Nav.Link href="#"> Contact </Nav.Link>{" "}
              </Link>
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
        <ProjectPage id="projectpage" />
        {/* <ProjectPageWeb id="projectpageweb" /> */}
        <AboutPage id="aboutpage" />
        <ContactPage id="contactpage" />
        <Footer />
      </div>
    );
  }
}

export default App;
