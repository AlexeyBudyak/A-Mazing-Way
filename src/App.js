import Title from "./Title/Title";
import initialData from "./InitialData/InitialData.js";


function App() {
  const QA = initialData();
  return (
    <div>
      <Title/>
    </div>
  );
}

export default App;
