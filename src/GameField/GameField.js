import React from 'react';
import IconSquareFill from "../Icons/IconSquareFill";
import "../CSS/gameField.css";
import mazeData from "../Data/MazaData";


function GameField(props) {
  //
  const blockLine = Array(42).fill(<td id='gPix'> </td>);
  const blockBar = Array(28).fill(<tr>{blockLine}</tr>);
  for(let i = 1; i < 27; i++){
    let newLine = Array(42).fill(<td id='gPix'> </td>);

    newLine[1] = <td id='gClear'>.</td>;
    for(let j = 0; j < 38; j++){
      if( i <= mazeData(0).length && mazeData(0)[i - 1][j] === '0')  newLine[j + 2] = <td id='gClear'> </td>;
      //newLine.push(<td id='gClear'>0</td>);
    }
    newLine[40] = <td id='gClear'> </td>;

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