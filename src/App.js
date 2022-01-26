import styled from 'styled-components';
import background from './assets/mm.jpg';
import StageImage from './components/StageImage';
import Narrator from './components/Narrator';
import NavigationBar from './components/NavigationBar';
import StageActions from './components/StageActions';

import { BACKGROUND_COLOR, DEFAULT_COLOR } from './consts';

const App = () => {
  return (
    <AppWrapper>
      <AppBackground backgroundPath={background} />
      <GameFrame>
        <NavigationBar />
        <StageImage />
        <Narrator />
        <StageActions />
      </GameFrame>
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

const GameFrame = styled.div`
  height: 700px;
  min-width: 300px;
  max-width: 800px;
  box-sizing: border-box;
  border: 2px solid ${BACKGROUND_COLOR};
  color: ${DEFAULT_COLOR};
`;

export default App;
