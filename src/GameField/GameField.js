import React from 'react';
import "../CSS/gameField.css";
import direct from "./direct.js";
import setTrack from "./setTrack";

function blockHandler(maze,setMaze, player, setPlayer, x2, y2){
  let x = player.x;
  let y = player.y;
  let maze2D = maze.map(el=>el.split(''));
  const path = setTrack(maze2D, player.x, player.y, x2, y2, 1);
  if(path === undefined)  return;

  for(let i = 0; i < path.length; i++){
    [x,y]=direct(x, y, path[i]);
    maze2D[y][x] = '*';
  }
  setMaze(maze2D.map(el=>el.join('').replace(/[+]/g,'0')));
  setPlayer({...player, path: path});
}
function blockOutHandler(maze,setMaze){
  setMaze(maze.map(line => line.replace(/[*]/g,'0')));
}

function GameField(props) {
  const {maze, setMaze, player, setPlayer} = props;
  const blockLine = Array(42).fill(0).map((_,i)=><td className='gPix' key={'bL'+i}> </td>);
  const blockBar = Array(28).fill(0).map((_,i)=><tr key={'bB'+i}>{blockLine}</tr>);
  let tdId;
  let space;

  for(let i = 1; i < 27; i++){
    let newLine = Array(42).fill(0).map((_,i)=><td className='gPix' key={'nL'+i}> </td>);

    for(let j = 0; j < 40; j++){
      if( i <= maze.length && '*0'.includes(maze[i - 1][j])) {
        if(j===0) tdId = 'gStart';
            else  if(j === 39)  tdId = 'gEnd';
                        else    tdId = 'gClear';
          space = maze[i - 1][j] === '0' ? '' : '*';
          if(player.x === j && player.y === i - 1)  {space = player.skin; tdId+=' player';}

          newLine[j + 1] = <td key={i*100+j} className={tdId} onMouseOver={()=>blockHandler(maze, setMaze, player, setPlayer, j, i - 1)}
                               onMouseOut={()=>blockOutHandler(maze, setMaze)}>
                              {space}
                           </td>;
      }
    }

    blockBar[i] = <tr key={'bB'+i}>{newLine}</tr>;
  }
  return (
    <div >
      <table className = 'gField'>
        <tbody>

          {blockBar}

        </tbody>
      </table>
    </div>
  );
}

export default GameField;