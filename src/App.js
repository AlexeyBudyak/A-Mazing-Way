import React, {useState} from 'react';
import Title from "./Title/Title";
import GameField from "./GameField/GameField";
import mazeData from "./Data/MazaData";

function App() {
  const [lg,setLg] = useState(0);
  const [maze, setMaze] = useState(mazeData(0));
  return (
    <div>
      <Title lg = {lg} setLg = {setLg} />

      <div className="container">

        <GameField maze={maze} setMaze={setMaze}/>
      </div>


    </div>
  );
}

export default App;
