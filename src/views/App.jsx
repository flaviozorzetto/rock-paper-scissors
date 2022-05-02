import styled from 'styled-components';
import colors from '../functions/Colors';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Game from './components/Game';
import Layout from '../functions/Layout';

const Background = styled.div`
   background: ${colors.background.bck};
   width: 100%;
   height: 100vh;
`;

export default function App() {
   const [score, setScore] = useState(0);
   const [scoreClicks, setScoreClicks] = useState(0);
   const [gameMode, setGameMode] = useState('default');

   useEffect(() => {
      if (scoreClicks == 30) {
         setGameMode('secret');
      }
      // console.log('You clicked ' + scoreClicks + ' times!');
   }, [scoreClicks]);

   useEffect(() => {
      // console.log('You are playing ' + gameMode + ' mode!');
   }, [gameMode]);

   return (
      <Background>
         <Layout.container
            padding="40px 0 0 0"
            max_width="960px"
            next_widths={[['1000px', '780px']]}
         >
            <Header
               score={score}
               scoreClicks={scoreClicks}
               setGameMode={setGameMode}
               setScoreClicks={setScoreClicks}
            />
            <Game gameMode={gameMode} setScore={setScore} />
         </Layout.container>
      </Background>
   );
}
