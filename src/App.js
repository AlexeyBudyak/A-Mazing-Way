import React, {useState} from 'react';
import Title from "./Title/Title";
import GameField from "./GameField/GameField";
import mazeData from "./Data/MazaData";
import playerDate from "./Data/PlayerData";

function App() {
  const [player, setPlayer] = useState(playerDate())
  let [maze, setMaze] = useState(mazeData(0));
  return (
    <div>
      <Title maze={maze} setMaze={setMaze} player = {player} setPlayer = {setPlayer}/>

      <div className="container">

        <GameField maze={maze} setMaze={setMaze} player = {player} setPlayer = {setPlayer}/>
      </div>


    </div>
  );
}

export default App;
