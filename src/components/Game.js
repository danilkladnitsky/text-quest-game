import React, { useContext, useMemo } from 'react';
import styled from 'styled-components';
import { BACKGROUND_COLOR, DEFAULT_COLOR, GAME_STATUSES } from '../consts';
import { GameContext } from '../context/GameContext';
import Narrator from './Narrator';
import NavigationBar from './NavigationBar';
import Promo from './Promo';
import StageActions from './StageActions';
import StageImage from './StageImage';
import StartGamePopup from './StartGamePopup';

const Game = () => {
  const {
    values: { gameStatus },
  } = useContext(GameContext);

  const GameLayout = useMemo(
    () => (
      <GameFrame>
        <NavigationBar />
        <StageImage />
        <Narrator />
        <StageActions />
      </GameFrame>
    ),
    []
  );

  const handleGameStatuses = () => {
    switch (gameStatus) {
      case GAME_STATUSES.PENDING:
        return <StartGamePopup />;
      case GAME_STATUSES.FINISHED:
        return <Promo />;
      default:
        return GameLayout;
    }
  };

  return handleGameStatuses();
};

const GameFrame = styled.div`
  width: 800px;
  box-sizing: border-box;
  border: 2px solid ${BACKGROUND_COLOR};
  color: ${DEFAULT_COLOR};
`;

export default Game;
