import React from 'react';
import IconSquareFill from "../Icons/IconSquareFill";
import "../CSS/gameField.css";
import mazeData from "../Data/MazaData";
function setTrack(maz, x1, y1, x2, y2, n = 0, track = ''){
  let path = [];
  let mazeT = [...maz];
  if(n) mazeT[y1][x1] = '*';
  if((Math.abs(x2 - x1) === 1 && y1 === y2) ||
     (Math.abs(y2 - y1) === 1 && x1 === x2))
        return [[...mazeT], n, track];
  if(y1 && mazeT[y1 - 1][x1] === '0') path.push(setTrack([...mazeT],x1, y1 - 1, x2, y2, n + 1, track + 'N'));
  if(y1 < 25 && mazeT[y1 + 1][x1] === '0') path.push(setTrack([...mazeT],x1, y1 + 1, x2, y2, n + 1, track + 'S'));
  if(x1 && mazeT[y1][x1 - 1] === '0') path.push(setTrack([...mazeT],x1 - 1, y1, x2, y2, n + 1, track + 'W'));
  if(x1 < 39 && mazeT[y1][x1 + 1] === '0') path.push(setTrack([...mazeT],x1 + 1, y1, x2, y2, n + 1, track + 'E'));
  if(!path.length)  return [[...mazeT], 1000, ''];
  if(path.length === 1) return path[0];
  return path.sort((a,b)=>(a[1] - b[1]))[0];
}

function blockHandler(maze,setMaze, player, x2, y2){
  let x = player.x;
  let y = player.y;
  let maze2D = maze.map(el=>el.split(''));
  const path = setTrack([...maze2D], player.x, player.y, x2, y2);
  maze2D = maze.map(el=>el.split(''));
  console.log(path[1],path[2]);
  for(let i = 0; i < path[2].length; i++){
    switch(path[2][i]){
      case 'N': y--;  break;
      case 'S': y++;  break;
      case 'W': x--;  break;
      case 'E': x++;  break;
    }
    maze2D[y][x] = '*';
  }
  setMaze(maze2D.map(el=>el.join('')));
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

    //newLine[1] = <td id='gStart'>.</td>;
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
      //newLine.push(<td id='gClear'>0</td>);
    }
    //newLine[40] = <td id='gEnd'> </td>;

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