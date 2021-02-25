import React from 'react';
import Language from "./Language";
import QCount from "./QCount";
import Skin from "./Skin";
import lgData from "../Data/LanguageData";

function Title(props) {
  const {player, setPlayer} = props;
  return (
    <div className="alert alert-primary" role="alert">

      <div className="container">
        <div className="row align-items-start">
          <div className="col">
            <h1>A Mazing Way</h1>
          </div>
          <div className="col">

            <button type="button" className="btn btn-primary">{lgData(player.lg).Start}</button>
            <Skin player={player} setPlayer={setPlayer}/>
          </div>

          <div className="col">
            <Language player={player} setPlayer={setPlayer}/>
            <QCount player = {player}/>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Title;