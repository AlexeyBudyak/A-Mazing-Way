import React from 'react';
import direct from "./direct.js";

function pathCheck(maze, path, xBegin, yBegin){ // Filter out useless ways
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

function finishCheck(x1, y1, x2, y2, path){ // Check if path completed
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
  return [];
}

export default setTrack;
