import React from 'react';
import IconSquareFill from "../Icons/IconSquareFill";


function GameField(props) {
  const blockLine = Array(60).fill(<td><IconSquareFill/></td>);

  return (
    <div>
      <table >

        <tbody>
        <tr>{blockLine}</tr>
        <tr>{blockLine}</tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>

        </tbody>
      </table>
    </div>
  );
}

export default GameField;