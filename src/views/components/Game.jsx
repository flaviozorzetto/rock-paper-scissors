import Layout from '../../functions/Layout';
import styled from 'styled-components';
import GameButton from './GameButton';
import rock from '../../imgs/icon-rock.svg';
import paper from '../../imgs/icon-paper.svg';
import scissors from '../../imgs/icon-scissors.svg';
import colors from '../../functions/Colors';

const Game = styled.section``;

export default function (props) {
   return (
      <main>
         <Game>
            <Layout.wrapper justify="center">
               <GameButton img={rock} color={colors.primary.rock} />
               <GameButton img={paper} color={colors.primary.paper} />
               <GameButton img={scissors} color={colors.primary.scissors} />
            </Layout.wrapper>
         </Game>
      </main>
   );
}
