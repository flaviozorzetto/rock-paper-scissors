import styled from 'styled-components';
import Layout from '../../../functions/Layout';
import colors from '../../../functions/Colors';

const PickedWrapper = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
   gap: 4em;

   h2 {
      color: white;
      font-size: 2rem;
      text-transform: uppercase;
   }

   @media screen and (max-width: 690px) {
      width: 50%;

      .pButton {
         width: 150px;
         height: 150px;
      }

      h2 {
         font-size: 1.4rem;
         text-align: center;
      }
   }
   @media screen and (max-width: 400px) {
      h2 {
         font-size: 1.1rem;
      }

      .pButton {
         width: 130px;
         height: 130px;
      }
   }
`;

const GameWrapper = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;

   @media screen and (max-width: 900px) {
      flex-wrap: wrap;
      .last-order {
         order: 2;
         width: 100%;
         display: flex;
         align-items: center;
         flex-direction: column;
      }
   }

   @media screen and (max-width: 690px) {
      gap: 3rem 0;
   }
`;

const transform = `position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);`;

let buttonSize = '300px';

const GameButton = styled.div`
   position: relative;
   z-index: 100;
   background: ${props => colors.primary[props.value]};
   border-radius: 50%;
   width: ${buttonSize};
   height: ${buttonSize};

   transition: 0.5s all;
   box-shadow: ${props => `0 7px 0 0 ${props.box}`};
   ${props => {
      console.log(props.boxshadow);
      return props.boxshadow
         ? `box-shadow: 0 0 0 75px hsla(214,47%,23%,80%),0 0 0 150px hsla(214,47%,23%,60%),0 0 0 225px hsla(214,47%,23%,40%); z-index: -1;`
         : null;
   }};
`;

const circleSize = '80%';

const CircleImg = styled.div`
   ${transform}
   background-image: ${props => `url(${props.imgList[props.value]})`};
   background-color: white;
   background-repeat: no-repeat;
   background-position: center;
   background-size: 50%;
   width: ${circleSize};
   height: ${circleSize};
   border-radius: 50%;
   box-shadow: inset 0 8px 0 0 #ccc;
`;

const Circle = styled.div`
   position: relative;
   width: ${buttonSize};
   height: ${buttonSize};
   border-radius: 50%;
`;

const Black = styled.div`
   ${transform}
   background-color: #0000002b;
   width: ${circleSize};
   height: ${circleSize};
   border-radius: 50%;
`;

const PlayAgainButton = styled.button`
   text-transform: uppercase;
   padding: 0.75rem 3rem;
   border-radius: 0.75rem;
   transition: 0.2s;
   cursor: pointer;
   &:hover {
      box-shadow: 1px 1px 10px 5px white;
   }
`;

const GameStatus = styled.div`
   h2 {
      text-align: center;
      color: white;
      margin-bottom: 2rem;
      font-size: 3rem;
   }

   .red {
      color: #bf1212;
   }
`;

export default function (props) {
   return (
      <Layout.container
         max_width="900px"
         next_widths={[['1000px', '90%']]}
         mgt="70px"
      >
         <GameWrapper>
            <PickedWrapper>
               <h2>You picked</h2>
               <GameButton
                  value={props.userOpt}
                  boxshadow={props.userWinnerStatus == 'win' ? true : false}
                  className="pButton"
               >
                  <CircleImg value={props.userOpt} imgList={props.imgs} />
               </GameButton>
            </PickedWrapper>
            {props.userWinnerStatus == undefined ? null : (
               <GameStatus className="last-order">
                  <h2>
                     {props.userWinnerStatus == 'draw'
                        ? 'Draw'
                        : `You ${props.userWinnerStatus}`}
                  </h2>
                  <PlayAgainButton
                     className={
                        props.userWinnerStatus === 'lose' ? 'red' : null
                     }
                     onClick={props.reset}
                  >
                     Play Again
                  </PlayAgainButton>
               </GameStatus>
            )}
            <PickedWrapper>
               <h2>The House picked</h2>
               {props.computerOpt == undefined ? (
                  <Circle className="pButton">
                     <Black />
                  </Circle>
               ) : (
                  <GameButton
                     value={props.computerOpt}
                     boxshadow={props.userWinnerStatus == 'lose' ? true : false}
                     className="pButton"
                  >
                     <CircleImg
                        value={props.computerOpt}
                        imgList={props.imgs}
                     />
                  </GameButton>
               )}
            </PickedWrapper>
         </GameWrapper>
      </Layout.container>
   );
}
