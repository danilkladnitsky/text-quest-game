import React from 'react';
import styled from 'styled-components';
import FlickerAnimation from './FlickerAnimation';

const ActionButton = (props) => {
  return (
    <Button>
      <FlickerAnimation>
        <ButtonSymbol>{'>'}</ButtonSymbol>
      </FlickerAnimation>
      <Text>{props.text}</Text>
    </Button>
  );
};

const Button = styled.button`
  position: relative;
  display: flex;
  height: 50px;
  width: 100%;
  border: none;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  padding-left: 35px;
  opacity: 0.4;
  &:hover {
    opacity: 1;
  }
`;

const ButtonSymbol = styled.span`
  position: absolute;
  left: 0px;
  top: 0px;
  color: #fff;
  font-size: 1.5em;
  font-family: 'Press Start 2P';
`;

const Text = styled.span`
  color: #fff;
  font-size: 1.2em;
  font-family: 'Press Start 2P';
  font-weight: 600;
`;

export default ActionButton;
