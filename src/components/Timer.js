import React, { useContext } from 'react';
import styled from 'styled-components';
import Countdown from 'react-countdown';
import { ALERT_COLOR, DEFAULT_COLOR } from '../consts';
import { GameContext } from '../context/GameContext';

const Timer = () => {
  const {
    actions: { finishGame },
  } = useContext(GameContext);

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      finishGame();
      return '0:00';
    } else {
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    }
  };
  return (
    <TimerWrapper hurry>
      <Countdown
        date={Date.now() + 5 * 60 * 1000}
        renderer={renderer}></Countdown>
    </TimerWrapper>
  );
};

const TimerWrapper = styled.div`
  position: absolute;
  right: 15px;
  text-align: right;
  color: ${(props) => (props.hurry ? ALERT_COLOR : DEFAULT_COLOR)};
  @media (max-width: 768px) {
    font-size: 0.6em;
  }
`;

export default Timer;
