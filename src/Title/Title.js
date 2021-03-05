import React from 'react';
import Language from "./Language";
import QCount from "./QCount";
import Skin from "./Skin";
import lgData from "../Data/LanguageData";

function mazeStart(maze, setMaze, player, setPlayer){
  let devX, devY;
  do {
    devX = 1 + ~~(Math.random()*38);
    devY = ~~(Math.random()*26);
  }while(maze[devY][devX]!=='0');
  console.log(devX,':',devY);
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