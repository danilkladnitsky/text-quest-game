import React from 'react';
import styled from 'styled-components';
import { ALERT_COLOR, DEFAULT_COLOR } from '../consts';
import FlickerAnimation from './FlickerAnimation';
import LayoutFrame from './LayoutFrame';

const NavigationBar = () => {
  return (
    <LayoutFrame flex={1} justifyContent='space-between' borderBottom>
      <CurrentLocation>Гостиная</CurrentLocation>
      <FlickerAnimation>
        <GameTarget>
          {'>>> '}Найти выход{' <<<'}
        </GameTarget>
      </FlickerAnimation>

      <Timer hurry>05:00</Timer>
    </LayoutFrame>
  );
};

const CurrentLocation = styled.div`
  flex: 0.2;
  text-align: left;
`;

const GameTarget = styled.div``;

const Timer = styled.div`
  flex: 0.2;
  text-align: right;
  color: ${(props) => (props.hurry ? ALERT_COLOR : DEFAULT_COLOR)};
`;

export default NavigationBar;
