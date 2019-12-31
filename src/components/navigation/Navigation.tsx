import React, { useContext } from 'react';

import Container from '../container/Container.component';

import logo from '../../assets/images/98labs.png';

import { BoundingRectTop } from '../../App';

import { Link } from 'react-scroll';

import './navigation.style.css';

const Navigation = () => {
    const [toggle, setToggle] = React.useState(false);
    const { distance } = useContext(BoundingRectTop);

    const handleToggle = () => {
        setToggle(!toggle);
    }
    
    const closeToggle = () => {
        setToggle(false)
    }
    return (
        <nav id="nav" className={distance <= -100 ? "show-color" : ''}>
            <Container>
                <div className="nav-inner">
                    <div className="nav-logo">
                        <Link to="banner" spy={true} smooth={true} >
                            <img src={logo} alt="" className="nav-image"/>
                        </Link>
                    </div>
                    <div className={`nav-list-wrapper ${toggle ? 'open-wrapper' : ''}`}>
                        <div className={`nav-list-container ${toggle ? 'open-list-container' : ''}`}>
                            <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} className="nav-item" onClick={closeToggle}>
                                ABOUT
                            </Link>
                            <Link activeClass="active" to="offer" spy={true} smooth={true} offset={0} className="nav-item" onClick={closeToggle}>
                                WHAT WE OFFER
                            </Link>
                            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} className="nav-item" onClick={closeToggle}>
                                CONTACT
                            </Link>
                            {toggle && <div className="x-button" onClick={closeToggle}>
                                <span className="x-button-span"></span></div>}
                        </div>
                    </div>
                    <div className={`hamburger ${toggle ? 'bg-green' : ''}`} onClick={handleToggle}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Navigation;