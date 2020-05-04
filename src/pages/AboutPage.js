import React from 'react';
import Hero from '../components/Hero';

function AboutPage(props) {

    return (
        <div id={props.id} className="about-div " >
            <Hero title="About Me" className="about-title" />
            <div className=" row about-info-container mr-0 text-dark mx-auto ">

                <h4 className="font-weight-normal my-auto mx-auto about-info bg-light p-5">
                    I am a self taught Android and front-end web developer.
                <br />
                 <p className="mb-0 text-success">Stack for Android : </p> Android Studio and java (Learning Kotlin)
                <br />
                <p className="mb-0 text-primary"> Stack for Front-end : </p> Html, CSS ,JS , React

            </h4>
            </div>

        </div>
    );
}

export default AboutPage;