import React, { useState } from 'react';
import { GAME_STATUSES } from '../consts';
import { gameStages } from '../stages/gameStages';

export const GameContext = React.createContext();

export function GameProvider(props) {
  const restoreStage = () => {
    const savedStage = localStorage.getItem('GAME_STAGE');

    return gameStages[savedStage] || gameStages.AWAKENING;
  };

  const saveStage = (stage) => {
    const thisStageIsSaved =
      Boolean(localStorage.getItem('GAME_STAGE')) === stage;

    if (!thisStageIsSaved) {
      localStorage.setItem('GAME_STAGE', stage);
    }
  };

  const [stage, setStage] = useState(restoreStage());

  const updateStage = (newStage) => {
    const stageObject = gameStages[newStage];
    if (!stageObject) {
      return;
    }

    saveStage(newStage);
    setStage(stageObject);
  };

  const savedGameStatus = localStorage.getItem('GAME_STATUS')
    ? GAME_STATUSES.STARTED
    : GAME_STATUSES.PENDING;

  const [gameStatus, setGameStatus] = useState(savedGameStatus);

  const finishGame = () => {
    setTimeout(() => {
      saveStage('AWAKENING');
      setGameStatus(GAME_STATUSES.FINISHED);
    }, 0);
  };

  return (
    <GameContext.Provider
      value={{
        actions: { setGameStatus, updateStage, finishGame },
        values: { gameStatus, stage },
      }}>
      {props.children}
    </GameContext.Provider>
  );
}
