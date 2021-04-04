import React from 'react';
import Language from "./Language";
import QCount from "./QCount";
import Skin from "./Skin";
import lgData from "../Data/LanguageData";
import Difficulty from "./Difficulty";
import mazeData from "../Data/MazaData";

function qLevelGenerator(chance){
  let lvl = 0;
  while(chance > Math.random()*100 && lvl < 25) lvl++;
  return String.fromCharCode(65 + lvl);
}

function questionsGenerator(maze, setMaze, player){
  const chanceAppear = [5,15,30,50,75][player.difficluty];
  const chanceLevelIncrease = [30,40,50,75,90][player.difficluty];
  return (mazeData(0).map(line=>line
    .map((el,i)=>el !== '0' || i === 0 || i === 39 || chanceAppear < Math.random(100) * 100 ? el :
      qLevelGenerator(chanceLevelIncrease))));
}

function mazeStart(maze, setMaze, player, setPlayer){
  maze = questionsGenerator(maze, setMaze, player);

  let devX, devY;
  do {
    devX = 1 + ~~(Math.random()*38);
    devY = ~~(Math.random()*26);
  }while(maze[devY][devX]!=='0');
  maze[devY][devX] = '👻';
  setPlayer({...player, x:0, y: 13, devX: devX, devY: devY, devActive: true});
  setMaze(maze);
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