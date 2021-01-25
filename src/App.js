import React, {useState} from 'react';
import Title from "./Title/Title";
import QAData from "./Data/QAData.js";


function App() {
  const QA = QAData();
  const [lg,setLg] = useState(0);
  return (
    <div>
      <Title lg = {lg} setLg = {setLg} />
      {QA[0][0][0].Q}
    </div>
  );
}

export default App;
