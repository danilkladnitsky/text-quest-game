import TypeAnimation from 'react-type-animation';
import React from 'react';

const AnimatedText = ({ text }) => {
  return <TypeAnimation cursor={false} sequence={[text, 50]} wrapper='span' />;
};

export default AnimatedText;
