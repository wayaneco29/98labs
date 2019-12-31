import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';

import "animate.css/animate.min.css";

interface IProps {
    name: string,
    className?: any,
    children: React.ReactNode
}

const Animate:React.FC<IProps> = ({ name, children, className }) => (
    <ScrollAnimation animateIn={name} duration={1} animateOnce={true} className={className}>
        { children }
    </ScrollAnimation>
)

export default Animate;