import styled from 'styled-components';

const transform = `position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);`;

const buttonSize = '150px';

const GameButton = styled.div`
   position: relative;
   background: ${props => props.color};
   border-radius: 50%;
   width: ${buttonSize};
   height: ${buttonSize};
`;

const circleSize = '75%';

const CircleImg = styled.div`
   ${transform}
   background-image: ${props => `url(${props.img})`};
   background-color: white;
   background-repeat: no-repeat;
   background-position: center;
   width: ${circleSize};
   height: ${circleSize};
   border-radius: 50%;
`;

export default function (props) {
   return (
      <GameButton color={props.color}>
         <CircleImg img={props.img}></CircleImg>
      </GameButton>
   );
}
