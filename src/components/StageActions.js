import React, { useContext } from 'react';
import styled from 'styled-components';
import LayoutFrame from './LayoutFrame';
import ActionButton from './ActionButton';
import { GameContext } from '../context/GameContext';

const StageActions = () => {
  const {
    values: { stage },
    actions: { updateStage, finishGame },
  } = useContext(GameContext);

  const createActionCallback = (newStage) => {
    if (newStage === 'PROMO') {
      return () => finishGame();
    }

    return () => updateStage(newStage);
  };
  return (
    <LayoutFrame>
      <StageActionsWrapper>
        {stage.actions?.map((action, index) => (
          <ActionButton
            text={action.text}
            key={`${action.text}#${index}`}
            clickCallback={createActionCallback(action.nextStage)}
          />
        ))}
      </StageActionsWrapper>
    </LayoutFrame>
  );
};

const StageActionsWrapper = styled.div`
  position: relative;
`;

export default StageActions;
