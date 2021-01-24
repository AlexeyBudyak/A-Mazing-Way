import React from 'react';


function Language(props) {
  const lgTitles = ['English', 'Russian', 'Ukrainian'];
  return (
    <div>
        Language &nbsp;
       <select>
       <option value='English' selected >English</option>
       <option value='Russian' selected >Russian</option>
       <option value='Ukrainian' selected >Ukrainian</option>


      </select>
    </div>
  );
}

export default Language;