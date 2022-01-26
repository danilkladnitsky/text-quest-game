import React from 'react';
import styled from 'styled-components';
import AnimatedText from './AnimatedText';
import FlickerAnimation from './FlickerAnimation';

const ActionButton = (props) => {
  return (
    <Button onClick={props.clickCallback}>
      <FlickerAnimation>
        <ButtonSymbol>{'>'}</ButtonSymbol>
      </FlickerAnimation>
      <Text>
        <AnimatedText text={props.text} />
      </Text>
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
  padding-left: 35px;
  opacity: 0.4;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const ButtonSymbol = styled.span`
  position: relative;
  right: 15px;
  top: 1px;
  color: #fff;
  font-size: 1.3em;
  font-family: 'Press Start 2P';
`;

const Text = styled.span`
  color: #fff;
  font-size: 1.1em;
  font-family: 'Press Start 2P';
  font-weight: 600;
  text-align: left;
  line-height: 1.3em;
`;

export default ActionButton;
