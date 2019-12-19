import React, { useContext } from 'react';

import Container from '../container/Container.component';

import logo from '../../assets/images/98labs.png';

import { BoundingRectTop } from '../../App';

import { Link } from 'react-scroll';

import './navigation.style.css';

const Navigation = () => {
    const { distance } = useContext(BoundingRectTop);
    return (
        <nav id="nav" className={distance <= -100 ? "show-color" : ''}>
            <Container>
                <div className="nav-inner">
                    <div className="nav-logo">
                        <Link to="banner" spy={true} smooth={true} >
                            <img src={logo} alt="" className="nav-image"/>
                        </Link>
                    </div>
                    <div className="nav-list-wrapper">
                        <div className="nav-list-container">
                            <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} className="nav-item">
                                ABOUT
                            </Link>
                            <Link activeClass="active" to="offer" spy={true} smooth={true} offset={0} className="nav-item">
                                WHAT WE OFFER
                            </Link>
                            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} className="nav-item">
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