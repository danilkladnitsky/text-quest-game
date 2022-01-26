import React from 'react';
import styled from 'styled-components';

const LayoutFrame = (props) => {
  return (
    <Frame
      justifyContent={props.justifyContent}
      flex={props.flex}
      height={props.height}
      alignCenter={props.alignCenter}
      textCenter={props.textCenter}
      maxHeight={props.maxHeight}
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
  align-items: ${(props) => (props.alignCenter ? 'center' : 'unset')};
  max-height: ${(props) => props.maxHeight ?? `${props.maxHeight}`};
  box-sizing: border-box;
  border-bottom: ${(props) =>
    props.borderBottom ? '2px solid #fff' : 'unset'};
  padding: 20px;
  flex-wrap: wrap;
  text-align: ${(props) => (props.textCenter ? 'center' : 'unset')};
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default LayoutFrame;
