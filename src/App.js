import React, {useState} from 'react';
import Title from "./Title/Title";

function App() {
  const [lg,setLg] = useState(0);
  return (
    <div>
      <Title lg = {lg} setLg = {setLg} />

    </div>
  );
}

export default App;
