import React from 'react';
import IconSquareFill from "../Icons/IconSquareFill";
import "../CSS/gameField.css";
import mazeData from "../Data/MazaData";
function setTrack(maze, x1, y1, x2, y2, n = 0){
  let path = [];
  if(n) maze[y1][x1] = '*';
  if((Math.abs(x2 - x1) === 1 && y1 === y2) ||
     (Math.abs(y2 - y1) === 1 && x1 === x2))
        return [maze, n];
  if(y1 && maze[y1 - 1][x1] === '0') path.push(setTrack(maze,x1, y1 - 1, x2, y2, n + 1));
  if(y1 < 25 && maze[y1 + 1][x1] === '0') path.push(setTrack(maze,x1, y1 + 1, x2, y2, n + 1));
  if(x1 && maze[y1][x1 - 1] === '0') path.push(setTrack(maze,x1 - 1, y1, x2, y2, n + 1));
  if(x1 < 39 && maze[y1][x1 + 1] === '0') path.push(setTrack(maze,x1 + 1, y1, x2, y2, n + 1));
  if(!path.length)  return [maze, 1000];
  if(path.length === 1) return path[0];
  return path.sort((a,b)=>(a[1] - b[1]))[0];
}

function blockHandler(maze,setMaze, player, x2, y2){
  const maze2D = maze.map(el=>el.split(''));
  setTrack(maze2D, player.x, player.y, x2, y2);
  setMaze(maze.map(line => line.split('').map((el,i)=> (i > 35 && el==0) ? '*'  : el).join('')));
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