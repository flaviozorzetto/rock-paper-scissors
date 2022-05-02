import styled from 'styled-components';
import colors from '../../../functions/Colors';
import Layout from '../../../functions/Layout';

const ScoreBoardComp = styled.div`
   width: 100%;
   padding: 15px 25px;
   outline: 1px solid ${colors.neutral.header_outline};
   border-radius: 10px;
`;

const GameMode = styled.div`
   color: white;
   p {
      font-weight: 700;
      line-height: 0.9em;
      font-size: 2em;
      text-transform: uppercase;
   }
`;

const Score = styled.div`
   border-radius: 10px;
   background-color: white;
   padding: 10px 40px;

   .score {
      color: ${colors.neutral.score};
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 700;
      text-align: center;
   }

   .score-value {
      text-align: center;
      font-weight: 700;
      font-size: 3rem;
      color: ${colors.neutral.dark};
   }
`;

export default function ScoreBoard(props) {
   const increaseScore = () => {
      props.setScoreClicks(prevState => prevState + 1);
   };

   return (
      <ScoreBoardComp>
         <Layout.wrapper justify="space-between" align="center">
            <GameMode>
               <p>rock</p>
               <p>paper</p>
               <p>scissors</p>
            </GameMode>
            <Score onClick={increaseScore}>
               <p className="score">score</p>
               <p className="score-value">{props.score}</p>
            </Score>
         </Layout.wrapper>
      </ScoreBoardComp>
   );
}
