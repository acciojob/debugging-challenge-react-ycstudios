import React, { useState } from "react";
import '../styles/App.css';

const App = () => {
  let [count, setCount] = useState(0);

  return (
    <div className="ball">
      <h1 className="count" onDoubleClick={() => { alert("can't edit it") }}>
        {count}
      </h1>
      <button className="increment-button" onClick={() => setCount((prev) => prev + 1)}>
        Increment
      </button>
    </div>
  );
};

export default App;
