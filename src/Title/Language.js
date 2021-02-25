import React from 'react';
import lgData from "../Data/LanguageData";

function Language(props) {
  const {player, setPlayer}  = props;
  const lgTitles = ['English', 'Russian', 'Ukrainian'];

    function lgHandler() {
      //setLg(lgTitles.indexOf(document.getElementById("lang").value));
      setPlayer({...player, lg: lgTitles.indexOf(document.getElementById("lang").value)});
    }
  return (
    <div>
        {lgData(player.lg).Language} &nbsp;
       <select id='lang' onChange={()=>lgHandler()}>
         {lgTitles.map((el,i) =>
            <option value={el} id={el} key={el} select={(i === player.lg)+''} >{el}</option>)}
      </select>
    </div>
  );
}

export default Language;