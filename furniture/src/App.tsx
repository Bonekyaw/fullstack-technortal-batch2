import { useState } from "react";
import "./App.css";

function Header() {
  return (
    <>
      <h1>This is Title</h1>
      <div>This is body</div>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    // JSX - UI elements
    <>
      <Header />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
