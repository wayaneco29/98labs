import React from 'react';

import Container from '../container/Container.component';

import { MdLocationOn, MdPhone,MdEmail } from 'react-icons/md';

import './style.css';

const Footer:React.FC = () => {
    return (
        <footer id="footer">
            <Container>
                <div className="footer-inner">
                    <div className="footer-link-container">
                        <div className="footer-link">
                            <a href="https://wayaneco29.github.io/98labs" target="_self" rel="referrer noopener" className="link">PARTNERSHIP</a>
                            <a href="https://wayaneco29.github.io/98labs" target="_self" rel="referrer noopener" className="link">OUTSOURCING</a>
                            <a href="https://wayaneco29.github.io/98labs" target="_self" rel="referrer noopener" className="link">PROMOTION</a>
                            <a href="https://wayaneco29.github.io/98labs" target="_self" rel="referrer noopener" className="link">BUILD</a>
                        </div>
                        <div className="footer-link info-link">
                            <div className="info">
                                <MdLocationOn  className="info-logo first"/>
                                <p className="info-text">
                                    Cityland Herrera Tower V.A. Rufino corner Valero Streets, Salcedo Village, Makati, 1227 Metro Manila
                                </p>
                            </div>
                            <div className="info">
                                <MdPhone  className="info-logo second"/>
                                <p className="info-text">
                                    +63 2 813 2090
                                </p>
                            </div>
                            <div className="info">
                                <MdEmail  className="info-logo third"/>
                                <p className="info-text">
                                    brian.tanseng@98labs.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="footer-end">
                    All right reserve 98Labs.com &copy; 2008-2020
                </div>
            </Container>
        </footer>
    )
}

export default Footer;