import React, { useContext } from 'react';

import { BoundingRectTop } from '../../App';

import Container from '../container/Container.component';

import './banner.styles.css';

const Banner = () => {
    const { distance, setDistance } = useContext(BoundingRectTop);
    
    window.addEventListener("scroll", () => {
        const banner = document.querySelector("#banner").getBoundingClientRect().top;
        setDistance(banner)
    })
    
    return (
        <div id="banner">
            <div className="banner-background"></div>
            <Container>
                <div className="banner-inner">
                    <div className="banner-title">
                        PROMOTE YOUR BUSINESS
                    </div>
                    <div className="banner-text">
                        We can help you reach out, get feedback and build your online community through Internet-based marketing and social media. Expand your reach. Establish your online presence.
                    </div>
                    <div className="banner-footer">
                        <button className="banner-button">CONTACT US</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Banner;