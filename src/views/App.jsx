import styled from 'styled-components';
import colors from '../functions/Colors';
import ScoreBoard from './components/ScoreBoard';
import React, { useState } from 'react';
import Layout from '../functions/Layout';

const Background = styled.div`
   background: ${colors.background.bck};
   width: 100%;
   height: 100vh;
`;

export default function App() {
   const [score, setScore] = useState(0);

   return (
      <Background>
         <header>
            <Layout.container
               padding="40px 0 0 0"
               max_width="960px"
               next_widths={[['1000px', '780px']]}
            >
               <ScoreBoard score={score} setScore={setScore} />
            </Layout.container>
         </header>
      </Background>
   );
}
