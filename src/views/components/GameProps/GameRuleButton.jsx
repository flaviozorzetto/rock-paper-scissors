import styled from 'styled-components';

const GameRuleButton = styled.button`
   position: fixed;
   background-color: inherit;
   border: 1px solid white;
   border-radius: 10px;
   padding: 10px 30px;
   color: white;
   text-transform: uppercase;
   bottom: 50px;
   right: 100px;
   transition: 0.1s all;
   span {
      font-weight: 600;
   }

   &:hover {
      box-shadow: 0px 0px 10px 1px white;
      cursor: pointer;
      padding: 12px 32px;
   }

   @media screen and (max-width: 450px) {
      right: 50%;
      transform: translate(50%);
   }
`;

export default function (props) {
   return (
      <GameRuleButton
         onClick={() => {
            props.setGameRuleOpen(function (prevState) {
               return !prevState;
            });
         }}
      >
         <span>Rules</span>
      </GameRuleButton>
   );
}
