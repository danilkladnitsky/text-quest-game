import React, { useContext } from 'react';
import styled from 'styled-components';
import { GAME_STATUSES } from '../consts';
import { GameContext } from '../context/GameContext';
import ActionButton from './ActionButton';
import LayoutFrame from './LayoutFrame';

const StartGamePopup = () => {
  const {
    actions: { setGameStatus },
  } = useContext(GameContext);

  const handleGameStart = () => {
    localStorage.setItem('GAME_STATUS', GAME_STATUSES.STARTED);
    setGameStatus(GAME_STATUSES.STARTED);
  };

  const handleGameDecline = () => {
    window.location.href =
      'https://vk.com/itmostudents?message=Вы вышли%20из%20симуляции';
  };

  return (
    <PopupWrapper>
      <PopupText>
        Вы были выбраны для прохождения социального эксперимента. Выберите
        желаемое действие:
      </PopupText>
      <LayoutFrame>
        <ActionButton text='Начать игру' clickCallback={handleGameStart} />
        <ActionButton
          text='Нет, спасибо, мне страшно'
          clickCallback={handleGameDecline}
        />
      </LayoutFrame>
    </PopupWrapper>
  );
};

const PopupWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  height: fit-content;
  max-width: 600px;
  box-sizing: border-box;
  border: 2px solid #fff;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 10;
  color: #fff;
  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
  }
`;

const PopupText = styled.p`
  margin: 0px;
  text-align: center;
  margin-bottom: 10px;
  line-height: 1.5em;
  font-size: 1.2em;
  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

export default StartGamePopup;
