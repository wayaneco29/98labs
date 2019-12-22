import React from 'react';

import Container from '../container/Container.component';

import { FaBriefcase, FaHandshake, FaHammer } from 'react-icons/fa';
import { MdSubdirectoryArrowRight } from 'react-icons/md';

import ContentTitle from '../ContentTitle';
import ContentText from '../ContentText';

import Animate from '../Animate';

import './offer.styles.css';

const Offer = () => {

    return (
        <div id="offer">
            <Container>
                <div className="offer-inner">
                    <div className="title-container">
                        <Animate name="fadeInUp" className="title offer-title">
                            what we offer
                        </Animate>
                    </div>
                    <div className="offer-content">
                        <Animate name="fadeInLeft" className="offer-content-inner border-left">
                            <div className="content-info">
                                <div className="logo logo-top"><FaBriefcase className="logo-img"/></div>
                                <ContentTitle className="offer-title" title="PROMOTE YOUR BUSINESS!"/>
                                <ContentText>We can help you reach out, get feedback and build your online community through Internet-based marketing and social media. Expand your reach. Establish your online presence.</ContentText>
                            </div>
                        </Animate>
                        <Animate name="fadeInRight" className="offer-content-inner border-left">
                            <div className="content-info">
                                <div className="logo logo-top"><MdSubdirectoryArrowRight className="logo-img logo-rotate" /></div>
                                <ContentTitle className="offer-title" title="OUTSOURCE WITH US!" />
                                <ContentText>Do you need help with the software development? Our team is well-versed in different programming languages such as Java, .Net, Ruby/Rails, Groovy/Grails. PHP and Javascript. We put Agile development into motion.</ContentText>
                            </div>
                        </Animate>
                    </div>
                    <div className="offer-content">
                        <Animate name="fadeInLeft" className="offer-content-inner border-left">
                            <div className="content-info">
                                <div className="logo logo-top"><FaHandshake className="logo-img" /></div>
                                <ContentTitle className="offer-title" title="PARTNER WITH US!"/>
                                <ContentText>Do you have a business idea? We provide partner rates for those interested in co-developing software products with us. We become your development arm. We take part of the risk. We also take part with revenue.</ContentText>
                            </div>
                        </Animate>
                        <Animate name="fadeInRight" className="offer-content-inner border-left">
                            <div className="content-info">
                                <div className="logo logo-top"><FaHammer className="logo-img" /></div>
                                <ContentTitle className="offer-title" title="LET'S START BUILDING!"/>
                                <ContentText>98Labs Inc. focuses on connecting people and delivering actual working software. We provide value by combining technical expertise while giving business a human face.</ContentText>
                            </div>
                        </Animate>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Offer;