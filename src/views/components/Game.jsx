import Layout from '../../functions/Layout';
import styled from 'styled-components';
import GameButton from './GameProps/GamePlayableButton';
import rock from '../../imgs/icon-rock.svg';
import paper from '../../imgs/icon-paper.svg';
import scissors from '../../imgs/icon-scissors.svg';
import lizard from '../../imgs/icon-lizard.svg';
import spock from '../../imgs/icon-spock.svg';
import bgTriangle from '../../imgs/bg-triangle.svg';
import bgPentagon from '../../imgs/bg-pentagon.svg';
import colors from '../../functions/Colors';
import GameRuleButton from './GameProps/GameRuleButton';
import GameSteps from './GameSteps/GameSteps';
import { useEffect, useState } from 'react';

const Connector = styled.div`
   position: relative;
   width: 100%;
   height: 400px;

   #rock,
   #paper,
   #scissor,
   #lizard,
   #spock {
      position: absolute;
   }

   #rock {
      bottom: 10px;
      right: 80px;

      @media screen and (max-width: 450px) {
         bottom: 60px;
         right: 60px;
      }
   }

   #lizard {
      bottom: 10px;
      left: 80px;
      @media screen and (max-width: 450px) {
         bottom: 60px;
         left: 60px;
      }
   }

   #spock {
      top: 90px;
      left: 25px;
      @media screen and (max-width: 450px) {
         top: 110px;
      }
   }

   #paper {
      top: 90px;
      right: 25px;
      @media screen and (max-width: 450px) {
         top: 110px;
      }
   }

   #scissor {
      top: -10px;
      right: 170px;
      @media screen and (max-width: 450px) {
         top: 40px;
         right: 125px;
      }
   }
`;

const DiffSelector = styled.div`
   p {
      color: white;
      font-size: 2em;
      cursor: pointer;
      &:hover {
         font-weight: 700;
      }
   }

   .selected,
   .selected-hard {
      text-decoration: underline;
   }

   .selected {
      color: green;
   }

   .selected-hard {
      color: red;
   }
`;

export default function (props) {
   const [isPlaying, setIsPlaying] = useState(false);
   const [computerOption, setComputerOption] = useState(undefined);
   const [userGameOption, setUserGameOption] = useState(undefined);
   const [userWinnerStatus, setUserWinnerStatus] = useState(undefined);

   const difficultySelector = (
      <Layout.container max_width="200px" mgt="20px">
         <DiffSelector>
            <Layout.wrapper align="center" justify="space-between">
               <p
                  className={props.gameMode == 'default' ? 'selected' : null}
                  onClick={() => {
                     props.setGameMode('default');
                  }}
               >
                  Easy
               </p>
               <p
                  className={
                     props.gameMode == 'secret' ? 'selected-hard' : null
                  }
                  onClick={e => {
                     props.setGameMode('secret');
                  }}
               >
                  Hard
               </p>
            </Layout.wrapper>
         </DiffSelector>
      </Layout.container>
   );

   const defaultGame = (
      <section>
         {difficultySelector}
         <Layout.container max_width="380px" mgt="100px">
            <Connector gameMode="default">
               <Layout.wrapper justify="center" fwrap={'wrap'} gap={'50px'}>
                  <GameButton
                     value="paper"
                     img={paper}
                     color={colors.primary.paper}
                     box="#0d2fd9"
                     setUserGameOption={setUserGameOption}
                  />
                  <GameButton
                     img={scissors}
                     value="scissors"
                     color={colors.primary.scissors}
                     box="#d39312"
                     setUserGameOption={setUserGameOption}
                  />
                  <GameButton
                     img={rock}
                     value="rock"
                     color={colors.primary.rock}
                     box="#c32240"
                     setUserGameOption={setUserGameOption}
                  />
               </Layout.wrapper>
            </Connector>
         </Layout.container>
      </section>
   );

   const hardGame = (
      <section>
         {difficultySelector}
         <Layout.container
            max_width="450px"
            next_widths={[['450px', '350px']]}
            mgt="50px"
         >
            <Connector gameMode="secret">
               <GameButton
                  img={rock}
                  color={colors.primary.rock}
                  box="#c32240"
                  id="rock"
                  setUserGameOption={setUserGameOption}
                  value="rock"
               />
               <GameButton
                  img={paper}
                  color={colors.primary.paper}
                  box="#0d2fd9"
                  id="paper"
                  setUserGameOption={setUserGameOption}
                  value="paper"
               />
               <GameButton
                  img={scissors}
                  color={colors.primary.scissors}
                  box="#d39312"
                  id="scissor"
                  setUserGameOption={setUserGameOption}
                  value="scissors"
               />
               <GameButton
                  img={lizard}
                  color={colors.primary.lizard}
                  box="#5a20c5"
                  id="lizard"
                  setUserGameOption={setUserGameOption}
                  value="lizard"
               />
               <GameButton
                  img={spock}
                  color={colors.primary.spock}
                  box="#30a1b5"
                  id="spock"
                  setUserGameOption={setUserGameOption}
                  value="spock"
               />
            </Connector>
         </Layout.container>
      </section>
   );

   useEffect(() => {
      if (userGameOption != undefined) {
         setIsPlaying(true);
      } else {
         setIsPlaying(false);
      }
   }, [userGameOption]);

   useEffect(() => {
      if (userWinnerStatus == 'win') {
         props.setScore(prevState => {
            let state = prevState;
            return state + 1;
         });
      }
   }, [userWinnerStatus]);

   useEffect(() => {
      if (isPlaying) {
         startGame();
      }
   }, [isPlaying]);

   useEffect(() => {
      if (
         computerOption == userGameOption &&
         computerOption != undefined &&
         userGameOption
      ) {
         setUserWinnerStatus('draw');
      } else {
         if (userGameOption === 'lizard') {
            consoleStatus();
         }
         if (userGameOption === 'rock') {
            if (computerOption === 'scissors' || computerOption === 'lizard') {
               setUserWinnerStatus('win');
            } else {
               setUserWinnerStatus('lose');
            }
         }
         if (userGameOption === 'paper') {
            if (computerOption === 'rock' || computerOption === 'spock') {
               setUserWinnerStatus('win');
            } else {
               setUserWinnerStatus('lose');
            }
         }
         if (userGameOption === 'scissors') {
            if (computerOption === 'paper' || computerOption === 'lizard') {
               setUserWinnerStatus('win');
            } else {
               setUserWinnerStatus('lose');
            }
         }
         if (userGameOption === 'spock') {
            if (computerOption === 'scissors' || computerOption === 'rock') {
               setUserWinnerStatus('win');
            } else {
               setUserWinnerStatus('lose');
            }
         }
         if (userGameOption === 'lizard') {
            if (computerOption === 'spock' || computerOption === 'paper') {
               setUserWinnerStatus('win');
            } else {
               setUserWinnerStatus('lose');
            }
         }
      }
   }, [computerOption]);

   const getGamemode = props.gameMode == 'default' ? defaultGame : hardGame;

   function consoleStatus() {
      console.log('escolha usuario: ' + userGameOption);
      console.log('escolha pc: ' + computerOption);
      console.log('ganhou: ' + userWinnerStatus);
      console.log('ta jogando:  ' + isPlaying);
   }

   function reset() {
      setUserGameOption(undefined);
      setComputerOption(undefined);
      setUserWinnerStatus(undefined);
   }

   function startGame() {
      const arr = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
      let random =
         props.gameMode == 'default'
            ? Math.floor(Math.random() * 3)
            : Math.floor(Math.random() * 5);
      setTimeout(() => {
         setComputerOption(arr[random]);
      }, 2000);
   }

   return (
      <main>
         {isPlaying ? (
            <GameSteps
               userOpt={userGameOption}
               computerOpt={computerOption}
               reset={reset}
               imgs={{ rock, paper, scissors, lizard, spock }}
               userWinnerStatus={userWinnerStatus}
            />
         ) : (
            getGamemode
         )}
         <GameRuleButton setGameRuleOpen={props.setGameRuleOpen} />
      </main>
   );
}
