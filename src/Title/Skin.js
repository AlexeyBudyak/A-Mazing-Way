import React from 'react';
import lgData from "../Data/LanguageData";

function Skin(props) {
  const {player, setPlayer}  = props;
  const skins = ['🙂', '😎','🤠','🐶','😺'];

    function skinHandler() {
      setPlayer({...player, skin: document.getElementById("skin").value});
    }
  return (
    <div>
      {lgData(player.lg).Skin}  &nbsp;
       <select id='skin' onChange={()=>skinHandler()}>
         {skins.map((el,i) =>
            <option value={el} id={el} key={el} select={(skins[i] === player.skin)+''} >{el}</option>)}
      </select>
    </div>
  );
}

export default Skin;