import logo from "./logo.svg";
import { useState, useEffect } from "react";
import WelcomeMessage from "./WelcomeMessage";
import Counter from "./Counter";
import "./App.css";

function App() {
  const [count, setcount] = useState(0);
  useEffect(() => {
    console.log(`component mounted`);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <WelcomeMessage name={"nshuti"}>nnnn</WelcomeMessage>
        <Counter setcount={setcount} count={count} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
