import React from 'react';
import styled from 'styled-components';
import LayoutFrame from './LayoutFrame';
import ActionButton from './ActionButton';

const StageActions = () => {
  return (
    <LayoutFrame>
      <ActionButton text='Осмотреть другие комнаты' />
      <ActionButton text='Осмотреть настенные часы' />
      <ActionButton text='Попытаться открыть входную дверь' />
    </LayoutFrame>
  );
};

const StageActionsWrapper = styled.div`
  position: relative;
`;

export default StageActions;
