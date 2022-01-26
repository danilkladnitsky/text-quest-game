import React from 'react';
import styled, { keyframes } from 'styled-components';

const FlickerAnimation = (props) => {
  return <FlickerWrapper>{props.children}</FlickerWrapper>;
};

const FlickerKeyFrames = keyframes`
  0% {
    opacity: 1;
  }
  
  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
`;

const FlickerWrapper = styled.div`
  display: inline-block;
  animation: ${FlickerKeyFrames} 3s linear infinite;
`;

export default FlickerAnimation;
