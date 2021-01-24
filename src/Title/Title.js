import React from 'react';
import Language from "./Language";


function Title(props) {
  return (
       <div className="alert alert-primary" role="alert">

    <div className="container">
      <div className="row align-items-start">
        <div className="col">
          Title
        </div>
        <div className="col">

        <Language/>

        </div>

        <div className="col">
          Count
        </div>
      </div>
    </div>
      </div>

  );
}

export default Title;