import React, {useState, useEffect} from 'react';
import "../CSS/gameField.css";
import direct from "./direct.js";
import setTrack from "./setTrack";

function runHandler(maze,setMaze, player, setPlayer, x2, y2){
  setPlayer({...player, target:{...player.target, active: true}});

}

function blockHandler(maze,setMaze, player, setPlayer, x2, y2){
  let x = player.x;
  let y = player.y;

  player = {...player, target: {...player.target,x:x2, y: y2, pic : maze[y2][x2]}}
  if(maze[y2][x2]!=='0')  maze[y2][x2] = '0';
  const path = setTrack(maze, player.x, player.y, x2, y2, 1);
  if(!path.length)  maze[y2][x2] = player.target.pic;
  else for(let i = 0; i < path.length; i++){
    [x,y]=direct(x, y, path[i]);
    maze[y][x] = i < path.length -1  || player.target.pic ==='0' ? '*' : '⚔️';
  }
  setMaze(maze.map(line=>line.map(el=> el === '+' ? '0' : el)));
  setPlayer({...player, path: path});
}
function blockOutHandler(maze,setMaze,player,setPlayer){
  maze = maze.map(line=>line.map(el=> el === '*' ? '0' : el));
  maze[player.target.y][player.target.x] = player.target.pic;
  setMaze(maze);
}

function GameField(props) {
  const {maze, setMaze, player, setPlayer} = props;

    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
      console.log('*')
      let interval = null;
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 200);
         return () => clearInterval(interval);
    }, [seconds * player.target.active]);

    // filling everything with 'concrete' blocks
    const blockLine = Array(42).fill(0).map((_, i) => <td className='gPix' key={'bL' + i}></td>);
    const blockBar = Array(28).fill(0).map((_, i) => <tr key={'bB' + i}>{blockLine}</tr>);
    let tdId;
    let space;

    // Curving map in the concrete rectangle line by line
    for (let i = 1; i < 27; i++) {
      let newLine = Array(42).fill(0).map((_, i) => <td className='gPix' key={'nL' + i}></td>);

      for (let j = 0; j < 40; j++) {
        if (i <= maze.length && maze[i - 1][j] !== '1') {
          tdId = !j ? 'gStart' : j === 39 ? 'gEnd' : 'gClear';
          space = maze[i - 1][j] === '0' ? '' : maze[i - 1][j];
          if (/[A-Z]/.test(maze[i - 1][j])) tdId += ' question';
          if (player.x === j && player.y === i - 1) {
            space = player.skin;
            tdId += ' player';
          }
          newLine[j + 1] = <td key={i * 100 + j} className={tdId}
                               onMouseOver={() => blockHandler(maze, setMaze, player, setPlayer, j, i - 1)}
                               onMouseOut={() => blockOutHandler(maze, setMaze, player, setPlayer)}
                               onClick={() => runHandler(maze, setMaze, player, setPlayer, j, i - 1)}
          >
            {space}
          </td>;
        }
      }

      blockBar[i] = <tr key={'bB' + i}>{newLine}</tr>;
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