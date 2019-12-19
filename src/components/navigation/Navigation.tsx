import React from 'react';

import Container from '../container/Container.component';

import logo from '../../assets/images/98labs.png';

import { Link } from 'react-scroll';

import './navigation.style.css';

const Navigation = () => {
    return (
        <nav id="nav">
            <Container>
                <div className="nav-inner">
                    <div className="nav-logo">
                        <Link to="banner" spy={true} smooth={true} >
                            <img src={logo} alt="" className="nav-image"/>
                        </Link>
                    </div>
                    <div className="nav-list-wrapper">
                        <div className="nav-list-container">
                            <Link activeClass="active" to="about" spy={true} smooth={true} className="nav-item">
                                ABOUT
                            </Link>
                            <Link activeClass="active" to="offer" spy={true} smooth={true} className="nav-item">
                                WHAT WE OFFER
                            </Link>
                            <Link activeClass="active" to="contact" spy={true} smooth={true} className="nav-item">
                                CONTACT
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Navigation;