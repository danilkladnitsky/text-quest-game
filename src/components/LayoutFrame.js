import React from 'react';
import styled from 'styled-components';

const LayoutFrame = (props) => {
  return (
    <Frame
      justifyContent={props.justifyContent}
      flex={props.flex}
      height={props.height}
      borderBottom={props.borderBottom}>
      {props.children}
    </Frame>
  );
};

const Frame = styled.div`
  position: relative;
  display: flex;
  flex: ${(props) => props.flex ?? '1'};
  justify-content: ${(props) => props.justifyContent ?? 'unset'};
  height: ${(props) => props.height || 'fit-content'};
  box-sizing: border-box;
  border-bottom: ${(props) =>
    props.borderBottom ? '2px solid #fff' : 'unset'};
  padding: 20px;
  flex-wrap: wrap;
`;

export default LayoutFrame;
