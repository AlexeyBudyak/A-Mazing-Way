import React, {useState} from 'react';
import Title from "./Title/Title";
import initialData from "./InitialData/InitialData.js";


function App() {
  const QA = initialData();
  const [lg,setLg] = useState(0);
  return (
    <div>
      <Title lg = {lg} setLg = {setLg}/>
      {QA[0][0][0].Q}
    </div>
  );
}

export default App;
