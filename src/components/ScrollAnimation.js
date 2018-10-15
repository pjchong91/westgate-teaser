import React from 'react';
import ReactScrollAnimation from 'react-animate-on-scroll';

const ScrollAnimation = ({ children }) => {
  return (
    <ReactScrollAnimation animateIn="fadeIn">{children}</ReactScrollAnimation>
  );
};

export default ScrollAnimation;
