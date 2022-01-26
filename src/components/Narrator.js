import React, { useContext } from 'react';
import styled from 'styled-components';
import { GameContext } from '../context/GameContext';
import LayoutFrame from './LayoutFrame';

const Narrator = () => {
  const {
    values: { stage },
  } = useContext(GameContext);

  return (
    <LayoutFrame borderBottom height='300px'>
      <Text>{stage.narrator}</Text>
    </LayoutFrame>
  );
};

const Text = styled.p`
  margin: 0px;
  line-height: 2em;
`;

export default Narrator;
