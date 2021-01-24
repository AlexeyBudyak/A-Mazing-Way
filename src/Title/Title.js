import React from 'react';
import Language from "./Language";
import QCount from "./QCount";


function Title(props) {
  return (
    <div className="alert alert-primary" role="alert">

      <div className="container">
        <div className="row align-items-start">
          <div className="col">
            <h1>A Mazing Way</h1>
          </div>
          <div className="col">

            <Language lg = {props.lg}/>

          </div>

          <div className="col">
            <QCount/>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Title;