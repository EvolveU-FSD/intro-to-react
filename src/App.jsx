import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Danielle");
  function increaseCount(amount = 1) {
    setCount(count + amount);
  }

  return (
    <div className="App">
      <header className="App-header">
        {count}
        <button onClick={() => increaseCount(1)}>Increase Count</button>
        <button onClick={() => increaseCount(2)}>Increase Count By Two</button>
        <button onClick={() => increaseCount()}>
          Increase Count By Unknown
        </button>
      </header>
    </div>
  );
}

export default App;
