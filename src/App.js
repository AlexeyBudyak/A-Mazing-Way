import React, {useState} from 'react';
import Title from "./Title/Title";
import GameField from "./GameField/GameField";

function App() {
  const [lg,setLg] = useState(0);
  return (
    <div>
      <Title lg = {lg} setLg = {setLg} />

      <div className="container">

        <GameField/>
      </div>


    </div>
  );
}

export default App;
