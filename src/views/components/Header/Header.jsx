import ScoreBoard from './ScoreBoard';

export default function Header(props) {
   return (
      <header>
         <ScoreBoard
            score={props.score}
            scoreClicks={props.scoreClicks}
            setGameMode={props.setGameMode}
            setScoreClicks={props.setScoreClicks}
         />
      </header>
   );
}
