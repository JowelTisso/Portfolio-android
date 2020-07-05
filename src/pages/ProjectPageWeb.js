import React from "react";
import Hero from "../components/Hero";
import recipeseeker from "../assets/images/recipeseeker.png";
import mosumreport from "../assets/images/mosumreport.png";
import tshirtstore from "../assets/images/tshirt-store.png";

function ProjectPageWeb(props) {
  return (
    <div id={props.id}>
      <Hero title="Web Projects " className="web-projects" />
      <div id="web" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={tshirtstore} alt="Los Angeles" />
            <div class=" p-2 mt-2 d-none d-md-block text-white">
              <a
                className="btn btn-primary"
                href="https://teestore.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
              <a
                className="btn btn-primary ml-5"
                href="https://github.com/JowelTisso/mern-tshirt-store-frontend"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={mosumreport} alt="Chicago" />
            <div class="p-2 mt-2 d-none d-md-block text-white">
              <a
                className="btn btn-primary"
                href="http://mosumreport.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
              <a
                className="btn btn-primary ml-5"
                href="https://github.com/JowelTisso/weather-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={recipeseeker} alt="New York" />
            <div class="p-2 mt-2 d-none d-md-block text-white">
              <a
                className="btn btn-primary"
                href="https://recipeseeker.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
              <a
                className="btn btn-primary ml-5"
                href="https://github.com/JowelTisso/recipe-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>

        <a className="carousel-control-prev" href="#web" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#web" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    </div>
  );
}

export default ProjectPageWeb;
