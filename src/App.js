import React, { useState } from "react";
import PercentGraph from "./PercentGraph";

function App() {
  const [data] = useState([
    { value: 100, color: "green" },
    { value: 50, color: "#009900" },
    { value: 25, color: "#00ba00" }
  ]);

  return (
    <div className="App">
      <ul>
        {data.map(e => {
          return (
            <li key={Math.random()}>
              <PercentGraph value={e.value} color={e.color} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
