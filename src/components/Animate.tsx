import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';

import "animate.css/animate.min.css";

interface IProps {
    name: string,
    children: React.ReactNode
}

const Animate:React.FC<IProps> = ({ name, children }) => (
    <ScrollAnimation animateIn={name} duration={2.3} animateOnce={true}>
        { children }
    </ScrollAnimation>
)

export default Animate;