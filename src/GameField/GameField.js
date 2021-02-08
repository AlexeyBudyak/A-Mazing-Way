import React from 'react';
import IconSquareFill from "../Icons/IconSquareFill";
import "../CSS/gameField.css";
import mazeData from "../Data/MazaData";

function blockHandler(maze,setMaze){
  setMaze(maze.map(line => line.split('').map((el,i)=> (i > 35 && el==0) ? '*'  : el).join('')));
}
function blockOutHandler(maze,setMaze){
  setMaze(maze.map(line => line.replace(/[*]/g,'0')));
}

function GameField(props) {
  const {maze, setMaze} = props;
  const blockLine = Array(42).fill(<td id='gPix'> </td>);
  const blockBar = Array(28).fill(<tr>{blockLine}</tr>);
  let tdId;

  for(let i = 1; i < 27; i++){
    let newLine = Array(42).fill(<td id='gPix'> </td>);

    //newLine[1] = <td id='gStart'>.</td>;
    for(let j = 0; j < 40; j++){
      if( i <= maze.length && (maze[i - 1][j] === '0' || maze[i - 1][j] === '*')) {
        if(j===0) tdId = 'gStart';
            else  if(j === 39)  tdId = 'gEnd';
                        else    tdId = 'gClear';

          newLine[j + 1] = <td id={tdId} onMouseOver={()=>blockHandler(maze, setMaze)}
                               onMouseOut={()=>blockOutHandler(maze, setMaze)}
                                 >
                   {maze[i - 1][j] === '0' ? '' : '*'}</td>;


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