import React from 'react';
import lgData from "../Data/LanguageData";

function Difficulty(props) {
  const {player, setPlayer}  = props;
  console.log(lgData(player.lg).diffLevels);
  //const diffLevels = lgData(player.lg).diffLevels;
  const diffLevels = ['Extra Easy (6 - 10 years old)', 'Easy (11 - 17 years old)', 'Normal (18-30 years old)', 'Hard (31 - 50 years old)', 'Extra Hard (51 - 90 years old)']

    function diffHandler() {
      setPlayer({...player, difficluty: document.getElementById("difficluty").value});
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