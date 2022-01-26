import styled from 'styled-components';
import background from './assets/mm.jpg';
import { GameProvider } from './context/GameContext';
import StartGamePopup from './components/StartGamePopup';
import Game from './components/Game';

const App = () => {
  return (
    <GameProvider>
      <AppWrapper>
        <AppBackground backgroundPath={background} />
        <Game />
      </AppWrapper>
    </GameProvider>
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
  box-sizing: border-box;
  padding: 30px;
`;

const AppBackground = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.backgroundPath}) #000;
  opacity: 0.08;
`;

export default App;
