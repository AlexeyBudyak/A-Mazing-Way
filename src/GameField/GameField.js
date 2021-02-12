import React from 'react';
import IconSquareFill from "../Icons/IconSquareFill";
import "../CSS/gameField.css";
import mazeData from "../Data/MazaData";

function trackValidator(track){
  let x = 0, y = 0;
  for(let i = 0; i < track.length; i++){
     switch(track[i]){
      case 'N': y--;  break;
      case 'S': y++;  break;
      case 'W': x--;  break;
      case 'E': x++;  break;
    }
    if(!x && !y)  return false;
  }
  return true;
}

function pathCheck(maze, path, xBegin, yBegin){
  let x = xBegin;
  let y = yBegin;
  let trace = [];
  for(let i = 0; i < path.length; i++){
    trace.push(x + ':' + y);
     switch(path[i]){
      case 'N': y--;  break;
      case 'S': y++;  break;
      case 'W': x--;  break;
      case 'E': x++;  break;
    }

    if(trace.includes(x + ':' + y) ||  x < 0 || y < 0 || x > 39 || y > 25 ||
      (maze[y][x]!=='0' && maze[y][x]!=='+')) return false;
  }
  if(maze[y][x]==='+')  {console.log('track-filter'); return false;}
  maze[y][x] = '+';
  return true;
}

function finishCheck(x1, y1, x2, y2, path){
  for(let i = 0; i < path.length; i++){
     switch(path[i]){
      case 'N': y1--;  break;
      case 'S': y1++;  break;
      case 'W': x1--;  break;
      case 'E': x1++;  break;
    }
  }
  return (x1 === x2 && y1 === y2);
}

function setTrack(maze, x1, y1, x2, y2){
  let tracks = [''];
  const d = ['N','S','W','E'];
  let tracksInfo = [];

  for(let i = 0; i < 100 && tracks.length; i++){
      tracks = Array(tracks.length * 4).fill('')
            .map((_,i)=>tracks[~~(i/4)]+d[i%4]);

     console.log('Before filter: ',tracks);

      tracks = tracks.filter(path => pathCheck(maze, path, x1, y1));

      console.log('After 1st filter: ',tracks);

     //  tracksInfo = tracks.filter(path => pathInfo(maze, path, x1, y1));

      // console.log('After 2nd filter: ',tracksInfo);

      for(let j = 0; j < tracks.length; j++){
        if(finishCheck(x1,y1,x2,y2,tracks[j])) return tracks[j];
      }
  }

  console.log('Ligit track not found: ',tracks);

  // if(!trackValidator(track))
  //   return '';
  // if((Math.abs(x2 - x1) === 1 && y1 === y2) ||
  //    (Math.abs(y2 - y1) === 1 && x1 === x2))
  //       return track;
  // let path = [];
  // if(y1 && maze[y1 - 1][x1] === '0')
  //   path.push(setTrack(maze, x1, y1 - 1, x2, y2, track + 'N'));
  // if(y1 < 25 && maze[y1 + 1][x1] === '0')
  //   path.push(setTrack(maze, x1, y1 + 1, x2, y2, track + 'S'));
  // if(x1 && maze[y1][x1 - 1] === '0')
  //   path.push(setTrack(maze,x1 - 1, y1, x2, y2, track + 'W'));
  // if(x1 < 39 && maze[y1][x1 + 1] === '0')
  //   path.push(setTrack(maze,x1 + 1, y1, x2, y2, track + 'E'));
  // if(!path.length)  return '';
  // if(path.length === 1) return path[0];
  // return path.filter(el=>el).sort((a,b)=>(a[1] - b[1]))[0];
}

function blockHandler(maze,setMaze, player, x2, y2){
  let x = player.x;
  let y = player.y;
  let maze2D = maze.map(el=>el.split(''));
  const path = setTrack(maze2D, player.x, player.y, x2, y2, 1);
  if(path === undefined)  return;
  console.log('path: ',path);
  for(let i = 0; i < path.length; i++){
    switch(path[i]){
      case 'N': y--;  break;
      case 'S': y++;  break;
      case 'W': x--;  break;
      case 'E': x++;  break;
    }
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