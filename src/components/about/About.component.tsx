import React from 'react';

import Container from '../container/Container.component';
import { Element } from 'react-scroll';

import { FaUsers, FaFileAlt } from "react-icons/fa";
import { MdSubdirectoryArrowRight } from 'react-icons/md';

import './about.styles.css';


const About:React.FC = () => {

    return (
        <div id="about">
            <div className="about-background">
                <span className="about-span"></span>
                <span className="about-span"></span>
                <span className="about-span"></span>
                <span className="about-span"></span>
            </div>
            <Container>
                <div className="about-inner">
                    <div className="title-container">
                    <div className="title">about us</div>
                    </div>
                    <div className="about-content">
                        <div className="content-info">
                            <div className="logo"><FaUsers className="logo-img"/></div>
                            <div className="logo-title">
                                EXTRAORDINARY WORK FROM THE ORDINARY PEOPLE
                            </div>
                            <div className="content-text">
                                We believe that in order to build excellent products and services, we need to invest in the people who makes them. We believe in the vastness of human potential no matter who he or she may be.
                                <br />
                                <br />
                                In other words, we believe in putting people first.
                            </div>
                        </div>
                        <div className="content-info">
                            <div className="logo"><MdSubdirectoryArrowRight className="logo-img logo-rotate"/></div>
                            <div className="logo-title">
                                EXCELLENCE AND CONTINUOUS IMPROVEMENT
                            </div>
                            <div className="content-text">
                                98Labs believes in fostering a culture of excellence and continuous improvement. We believe in empowering ordinary people to find and solve problems and to make improvements. We don't want to be comfortable with the norm. We encourage to build, seek, and destroy in our search for excellence.
                            </div>
                        </div>
                        <div className="content-info">
                            <div className="logo"><FaFileAlt className="logo-img"/></div>
                            <div className="logo-title">
                                HANDS-ON MANAGEMENT THROUGH TRAINING, COACHING AND MENTORING
                            </div>
                            <div className="content-text">
                            "To know oneself is to study oneself in action with another person." - Bruce Lee
                            <br />
                            <br />
                            New hires get individualized training while being supervised by managers who are also engineers and teachers. 98Labs believes in the importance of both theory and practice
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About;