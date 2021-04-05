import mazeData from "../Data/MazaData";

function qLevelGenerator(chance){
  let lvl = 0;
  while(chance > Math.random()*100 && lvl < 25) lvl++;
  return String.fromCharCode(65 + lvl);
}

function questionsGenerator(maze, setMaze, player){
  const chanceAppear = [5,15,30,50,75][player.difficluty];
  const chanceLevelIncrease = [30,40,50,75,90][player.difficluty];
  return (mazeData(0).map(line=>line
    .map((el,i)=>el !== '0' || i === 0 || i === 39 || chanceAppear < Math.random(100) * 100 ? el :
      qLevelGenerator(chanceLevelIncrease))));
}

function mazeStart(maze, setMaze, player, setPlayer){
  maze = questionsGenerator(maze, setMaze, player);

  let devX, devY;
  do {
    devX = 1 + ~~(Math.random()*38);
    devY = ~~(Math.random()*26);
  }while(maze[devY][devX]!=='0');
  maze[devY][devX] = '👻';
  setPlayer({...player, x:0, y: 13, devX: devX, devY: devY, devActive: true});
  setMaze(maze);
}
export default mazeStart;