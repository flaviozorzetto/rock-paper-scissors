import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Game from './components/Game';
import GameRule from './components/GameProps/GameRule';

export default function App() {
   const [score, setScore] = useState(
      JSON.parse(localStorage.getItem('score')) || 0
   );
   const [gameMode, setGameMode] = useState('default');
   const [gameRuleOpen, setGameRuleOpen] = useState(false);

   useEffect(() => {
      localStorage.setItem('score', score);
   }, [score]);

   function updateScoreLocalStorage(e) {
      if (e.key == 'score') {
         if (e.newValue == '' || e.newValue == null) {
            setScore(0);
         } else {
            setScore(JSON.parse(e.newValue));
         }
      }
   }

   useEffect(() => {
      window.addEventListener('storage', updateScoreLocalStorage);
      return () => {
         window.removeEventListener('storage', updateScoreLocalStorage);
      };
   }, []);

   return (
      <>
         <Header score={score} setGameMode={setGameMode} gameMode={gameMode} />
         <Game
            setGameMode={setGameMode}
            gameMode={gameMode}
            setScore={setScore}
            setGameRuleOpen={setGameRuleOpen}
         />
         {gameRuleOpen ? (
            <GameRule gameMode={gameMode} setGameRuleOpen={setGameRuleOpen} />
         ) : null}
      </>
   );
}
