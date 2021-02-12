import React from 'react';
import "../CSS/gameField.css";

function direct(x, y, c){
     switch(c){
      case 'N': return [x,y-1];
      case 'S': return [x,y+1];
      case 'W': return [x-1,y];
      case 'E': return [x+1,y];
    }
}

function pathCheck(maze, path, xBegin, yBegin){
  let x = xBegin;
  let y = yBegin;
  for(let i = 0; i < path.length; i++){
    [x,y]=direct(x, y, path[i]);
    if( x < 0 || y < 0 || x > 39 || y > 25 ||
      (maze[y][x]!=='0' && maze[y][x]!=='+')) return false;
  }
  if(maze[y][x]==='+')  return false;
  maze[y][x] = '+';
  return true;
}

function finishCheck(x1, y1, x2, y2, path){
  for(let i = 0; i < path.length; i++)
    [x1, y1] = direct(x1, y1, path[i]);
  return (x1 === x2 && y1 === y2);
}

function setTrack(maze, x1, y1, x2, y2){
  let tracks = [''];
  const d = ['N','S','W','E'];

  for(let i = 0; i < 100 && tracks.length; i++){
      tracks = Array(tracks.length * 4).fill('')
            .map((_,i)=>tracks[~~(i/4)]+d[i%4]); // Generate tracking routes

      tracks = tracks.filter(path => pathCheck(maze, path, x1, y1)); // Filter out useless ways

      for(let j = 0; j < tracks.length; j++)     // Find the successful way
        if(finishCheck(x1,y1,x2,y2,tracks[j])) return tracks[j];
  }
}

function blockHandler(maze,setMaze, player, x2, y2){
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
}
function blockOutHandler(maze,setMaze){
  setMaze(maze.map(line => line.replace(/[*]/g,'0')));
}

function GameField(props) {
  const {maze, setMaze, player, setPlayer} = props;
  const blockLine = Array(42).fill(<td id='gPix'> </td>);
  const blockBar = Array(28).fill(<tr>{blockLine}</tr>);
  let tdId;
  let space;

  for(let i = 1; i < 27; i++){
    let newLine = Array(42).fill(<td id='gPix'> </td>);

    for(let j = 0; j < 40; j++){
      if( i <= maze.length && '*0'.includes(maze[i - 1][j])) {
        if(j===0) tdId = 'gStart';
            else  if(j === 39)  tdId = 'gEnd';
                        else    tdId = 'gClear';
          space = maze[i - 1][j] === '0' ? '' : '*';
          if(player.x === j && player.y === i - 1)  space = player.skin;

          newLine[j + 1] = <td id={tdId} onMouseOver={()=>blockHandler(maze, setMaze, player, j, i - 1)}
                               onMouseOut={()=>blockOutHandler(maze, setMaze)}>
                              {space}
                           </td>;
      }
    }

    blockBar[i] = <tr>{newLine}</tr>;
  }
  return (
    <div >
      <table id = 'gField'>
        <tbody>

          {blockBar}

        </tbody>
      </table>
    </div>
  );
}

export default GameField;