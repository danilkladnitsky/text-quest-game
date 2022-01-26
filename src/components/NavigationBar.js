import React, { useContext } from 'react';
import styled from 'styled-components';
import { GameContext } from '../context/GameContext';
import LayoutFrame from './LayoutFrame';
import Timer from './Timer';

const NavigationBar = () => {
  const {
    values: { stage },
  } = useContext(GameContext);

  return (
    <LayoutFrame
      flex={1}
      justifyContent='space-between'
      borderBottom
      textCenter
      alignCenter>
      <CurrentLocation>{stage.place}</CurrentLocation>
      <GameTarget>Цель "Найти выход"</GameTarget>

      <Timer />
    </LayoutFrame>
  );
};

const CurrentLocation = styled.div`
  position: absolute;
`;

const GameTarget = styled.div`
  font-size: 0.8em;
  flex: 1;
`;

export default NavigationBar;
