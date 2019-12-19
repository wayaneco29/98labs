import React from 'react';

import Container from '../container/Container.component';

interface IProps {
    title: string,
    children: React.ReactNode,
    style: object
}
const Section:React.FC<IProps> = ({ title, children, style }) => {
    return (
        <div id="contact" style={style}>
            <Container>
                <div className="contact-inner">
                    <div className="title-container">
                        <div className="title">
                            { title }
                        </div>
                    </div>
                    {children}
                </div>
            </Container>
        </div>
    )
}

export default Section;