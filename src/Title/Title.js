import React from 'react';
import Language from "./Language";


function Title(props) {
  return (
    <div>
      <div className="alert alert-primary" role="alert">
        Title
        <Language/>
      </div>
    </div>
  );
}

export default Title;