import React from 'react';


function Language(props) {
  const lgTitles = ['English', 'Russian', 'Ukrainian'];
  return (
    <div>
        Language &nbsp;
       <select>

         {lgTitles.map((el,i) => i === props.lg ? <option value={el} key={el} selected >{el}</option>
                                                                : <option value={el} key={el}>{el}</option>)}
      </select>
      {props.lg}
    </div>
  );
}

export default Language;