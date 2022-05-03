import styled from 'styled-components';

const transform = `position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);`;

let buttonSize = '110px';

const GameButton = styled.div`
   position: relative;
   z-index: 100;
   background: ${props => props.color};
   border-radius: 50%;
   width: ${buttonSize};
   height: ${buttonSize};
   cursor: pointer;
   transition: 0.5s all;
   ${props => {
      if (props.id) {
         return `@media screen and (max-width: 450px) {
               width: 80px;
               height: 80px;
            }`;
      }
   }}

   box-shadow: ${props => `0 7px 0 0 ${props.box}`};
   &:hover {
      box-shadow: 1px 1px 10px 5px white;
   }
`;

const circleSize = '80%';

const CircleImg = styled.div`
   ${transform}
   background-image: ${props => `url(${props.img})`};
   background-color: white;
   background-repeat: no-repeat;
   background-position: center;
   width: ${circleSize};
   height: ${circleSize};
   @media screen and (max-width: 450px) {
      background-size: 50%;
   }

   border-radius: 50%;
   box-shadow: inset 0 8px 0 0 #ccc;
`;

export default function (props) {
   return (
      <GameButton
         onClick={() => {
            props.setUserGameOption(props.value);
         }}
         color={props.color}
         id={props.id || null}
         box={props.box}
      >
         <CircleImg img={props.img}></CircleImg>
      </GameButton>
   );
}
