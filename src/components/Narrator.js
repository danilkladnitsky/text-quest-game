import React from 'react';
import styled from 'styled-components';
import LayoutFrame from './LayoutFrame';

const Narrator = () => {
  return (
    <LayoutFrame borderBottom height='300px'>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
    </LayoutFrame>
  );
};

const Text = styled.p`
  margin: 0px;
  line-height: 2em;
`;

export default Narrator;
