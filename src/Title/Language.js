import React from 'react';

function Language(props) {
  const {lg,setLg}  = props;
  const lgTitles = ['English', 'Russian', 'Ukrainian'];

    function lgHandler() {
      //setLg(1);
  }
  return (
    <div>
        Language &nbsp;
       <select onChange={lgHandler}>

         {lgTitles.map((el,i) => i === lg ? <option value={el} id={el} selected >{el}</option>
                                                          : <option value={el} id={el}>{el}</option>)}
      </select>
      {lg}
    </div>
  );
}

export default Language;