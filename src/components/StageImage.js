import React, { useContext } from 'react';
import styled from 'styled-components';
import livingRoom from '../assets/living_room.jpg';
import { GameContext } from '../context/GameContext';

const StageImage = (props) => {
  const {
    values: { stage },
  } = useContext(GameContext);

  return (
    <ImageWrapper height='200px'>
      <ImageBackground imagePath={stage.image} />
      <ImageText></ImageText>
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height};
  width: 100%;
  background-color: #000;
  border-bottom: 2px solid #fff;
`;

const ImageBackground = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.imagePath});
  background-size: cover;
  background-position: center;
`;

const ImageText = styled.h4`
  position: relative;
  font-size: 2em;
`;

export default StageImage;
