import React from 'react';
import Language from "./Language";
import QCount from "./QCount";
import Skin from "./Skin";
import lgData from "../Data/LanguageData";
import Difficulty from "./Difficulty";

function questionsGenerator(maze, setMaze, player){
  const chance = [5,15,30,50,75][player.difficluty];
  setMaze(maze.map(line=>line.split('')
    .map((el,i)=>el === '0' && Math.random()*100 < chance && i && i < 39 ? 'A' : el).join(''))
  );
}

function mazeStart(maze, setMaze, player, setPlayer){
  questionsGenerator(maze, setMaze, player);

  let devX, devY;
  do {
    devX = 1 + ~~(Math.random()*38);
    devY = ~~(Math.random()*26);
  }while(maze[devY][devX]!=='0');

  setPlayer({...player, x:0, y: 13, devX: devX, devY: devY, devActive: true});
  console.log(player);
}
function Title(props) {
  const {maze, setMaze, player, setPlayer} = props;
  return (
    <div className="alert alert-primary" role="alert">

      <div className="container">
        <div className="row align-items-start">
          <div className="col">
            <h1>A Mazing Way</h1>
          </div>
          <div className="col">

            <button type="button" className="btn btn-primary" onClick={()=>mazeStart(maze,setMaze,player,setPlayer)}>
              {lgData(player.lg).Start}
            </button>
            <Skin player={player} setPlayer={setPlayer}/>
            <Difficulty player={player} setPlayer={setPlayer}/>
          </div>

          <div className="col">
            <Language player={player} setPlayer={setPlayer}/>
            <QCount player = {player}/>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Title;