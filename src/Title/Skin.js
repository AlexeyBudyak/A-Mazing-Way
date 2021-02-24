import React from 'react';
import lgData from "../Data/LanguageData";

function Skin(props) {
  const {lg, player, setPlayer}  = props;
  const skins = ['🙂', 'Q', 'W'];

    function skinHandler() {
      //setPlayer(skins.indexOf(document.getElementById("skin").value));
    }
  return (
    <div>
      {lgData(lg).Skin}  &nbsp;
       <select id='skin' onChange={()=>skinHandler()}>
         {skins.map((el,i) =>
            <option value={el} id={el} key={el} select={(skins[i] === player.skin)+''} >{el}</option>)}
      </select>
    </div>
  );
}

export default Skin;