import React from "react";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";

function ProjectPage(props) {
  return (
    <div id={props.id}>
      <Hero title="Android Projects" className="project-title" />
      <Carousel />
    </div>
  );
}

export default ProjectPage;
