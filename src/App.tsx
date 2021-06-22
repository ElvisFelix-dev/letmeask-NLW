import { useState } from "react";
import { Button } from "./components/Button";

export function App() {

  //let counter = 0;

  const [ counter, setCounter ]  = useState(0);

  function increment() {
    setCounter(counter + 1);
    console.log(counter);
  }
  return (
    <div className="App">
      <button onClick={increment}>{counter}</button>
      <Button title="Fechar" />
    </div>
  );
}


