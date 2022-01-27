import React, { useState } from 'react';
import useSound from 'use-sound';
import { GAME_STATUSES } from '../consts';
import { gameStages } from '../stages/gameStages';

import clickSfx from '../assets/sounds/click.wav';

export const GameContext = React.createContext();

export function GameProvider(props) {
  const [play] = useSound(clickSfx, { volume: 0.1 });

  const playClickSound = () => {
    play();
  };

  const [awakenings, setAwakenings] = useState(1);

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

    if (newStage === 'AWAKENING') {
      setAwakenings(awakenings + 1);
    }

    playClickSound();
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
        values: { gameStatus, stage, awakenings },
      }}>
      {props.children}
    </GameContext.Provider>
  );
}
