import React from 'react';
import Language from "./Language";
import QCount from "./QCount";
import Skin from "./Skin";
import lgData from "../Data/LanguageData";

function Title(props) {
  const {lg, setLg, player, setPlayer} = props;
  return (
    <div className="alert alert-primary" role="alert">

      <div className="container">
        <div className="row align-items-start">
          <div className="col">
            <h1>A Mazing Way</h1>
          </div>
          <div className="col">

            <button type="button" className="btn btn-primary">{lgData(lg).Start}</button>
            <Skin lg={lg} player={player} setPlayer={setPlayer}/>
          </div>

          <div className="col">
            <Language lg = {lg} setLg = {setLg}/>
            <QCount lg = {lg} />
          </div>
        </div>
      </div>
    </div>

  );
}

export default Title;