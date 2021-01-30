import React from 'react';
import IconSquareFill from "../Icons/IconSquareFill";
import "../CSS/gameField.css";


function GameField(props) {
  //
  const blockLine = Array(42).fill(<td id='gPix'>*</td>);
  const blockBar = Array(28).fill(<tr>{blockLine}</tr>);

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