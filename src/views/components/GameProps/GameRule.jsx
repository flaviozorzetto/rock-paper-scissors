import styled from 'styled-components';
import Layout from '../../../functions/Layout';
import colors from '../../../functions/Colors';
import closeIcon from '../../../imgs/icon-close.svg';
import rulesBonus from '../../../imgs/image-rules-bonus.svg';
import rules from '../../../imgs/image-rules.svg';

const GameRuleContainer = styled.div`
   position: fixed;
   top: 0;
   right: 0;
   left: 0;
   bottom: 0;
   z-index: 999;
   background-color: #00000070;
`;

const transform = `position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);`;

const GameRuleTab = styled.div`
   position: absolute;
   ${transform};
   background-color: white;
   height: 500px;
   width: 500px;
   border-radius: 10px;
   padding: 30px 30px;

   .game_rule_text {
      color: ${colors.neutral.dark};
      font-size: 2rem;
      text-transform: uppercase;
      font-weight: 700;
   }
   .close-icon {
      cursor: pointer;
   }

   .game_rule_img {
      margin: auto;
      width: 80%;
   }

   @media screen and (max-width: 550px) {
      height: 100%;
      width: 100%;

      padding: 100px 30px;

      .close-icon {
         order: 2;
      }

      & > div {
         height: 100%;
         flex-wrap: nowrap;
         flex-direction: column;
         justify-content: space-between;
      }
   }
`;

export default function (props) {
   const normalRuleDisplay = (
      <GameRuleTab>
         <Layout.wrapper
            justify="space-between"
            align="center"
            fwrap="wrap"
            gap="50px 0px"
         >
            <span className="game_rule_text">Rules</span>
            <img
               className="close-icon"
               src={closeIcon}
               alt=""
               onClick={() => {
                  props.setGameRuleOpen(function (prevState) {
                     return !prevState;
                  });
               }}
            />
            <img className="game_rule_img" src={rules} alt="" />
         </Layout.wrapper>
      </GameRuleTab>
   );

   return (
      <GameRuleContainer>
         <Layout.container height="100%" position="relative">
            <GameRuleTab>
               <Layout.wrapper
                  justify="space-between"
                  align="center"
                  fwrap="wrap"
                  gap="50px 0px"
               >
                  <span className="game_rule_text">Rules</span>
                  <img
                     className="close-icon"
                     src={closeIcon}
                     alt=""
                     onClick={() => {
                        props.setGameRuleOpen(function (prevState) {
                           return !prevState;
                        });
                     }}
                  />
                  <img className="game_rule_img" src={props.gameMode == 'default' ? rules : rulesBonus} alt="" />
               </Layout.wrapper>
            </GameRuleTab>
         </Layout.container>
      </GameRuleContainer>
   );
}
