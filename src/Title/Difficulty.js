import React from 'react';
import lgData from "../Data/LanguageData";

function Difficulty(props) {
  const {player, setPlayer}  = props;
  const diffLevels = lgData(player.lg).DiffLevels;
    function diffHandler() {
      setPlayer({...player, difficluty: diffLevels.indexOf(document.getElementById("difficluty").value)});
    }
  return (
    <div>
      {lgData(player.lg).Difficluty}  &nbsp;
       <select id='difficluty' onChange={()=>diffHandler()}>
         {diffLevels.map((el,i) =>
            <option value={el} id={el} key={el} select={(i === player.difficluty)+''} >{el}</option>)}
      </select>
    </div>
  );
}

export default Difficulty;