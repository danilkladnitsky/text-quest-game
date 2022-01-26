import styled from 'styled-components';
import background from './assets/mm.jpg';

const App = () => {
  return (
    <AppWrapper>
      <AppBackground backgroundPath={background} />
      <GameFrame>Wake up</GameFrame>
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #000;
`;

const AppBackground = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.backgroundPath}) #000;
  opacity: 0.07;
`;

const GameFrame = styled.div`
  display: flex;
  height: 600px;
  max-width: 400px;
  min-width: 300px;
  box-sizing: border-box;
  border: 2px solid #fff;
  color: #fff;
`;

export default App;
