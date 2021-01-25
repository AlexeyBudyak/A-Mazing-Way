import React from 'react';
import Language from "./Language";
import QCount from "./QCount";


function Title(props) {
  const {lg, setLg} = props;
  return (
    <div className="alert alert-primary" role="alert">

      <div className="container">
        <div className="row align-items-start">
          <div className="col">
            <h1>A Mazing Way</h1>
          </div>
          <div className="col">

            <Language lg = {lg} setLg = {setLg}/>

          </div>

          <div className="col">
            <QCount lg = {lg} />
          </div>
        </div>
      </div>
    </div>

  );
}

export default Title;