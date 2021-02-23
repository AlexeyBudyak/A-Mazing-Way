import React from 'react';

function Language(props) {
  const {lg,setLg}  = props;
  const lgTitles = ['English', 'Russian', 'Ukrainian'];

    function lgHandler() {
      setLg(lgTitles.indexOf(document.getElementById("lang").value));
    }
  return (
    <div>
        Language &nbsp;
       <select id='lang' onChange={()=>lgHandler()}>
         {lgTitles.map((el,i) =>
            <option value={el} id={el} select={(i === lg)+''} >{el}</option>)}
      </select>
    </div>
  );
}

export default Language;