import ScoreBoard from './ScoreBoard';
import Layout from '../../../functions/Layout';

export default function Header(props) {
   return (
      <header>
         <Layout.container
            padding="40px 0 0 0"
            max_width="960px"
            next_widths={[['1000px', '90%']]}
         >
            <ScoreBoard
               score={props.score}
               setGameMode={props.setGameMode}
               gameMode={props.gameMode}
            />
         </Layout.container>
      </header>
   );
}
