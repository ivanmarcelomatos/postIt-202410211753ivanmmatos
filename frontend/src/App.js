import React, { useState } from 'react';
import Header from './Header';

function App() {
  const [counter, setCounter] = useState(0);

  function handleSum() {
    setCounter(counter + 1);
  };

  function handleMinus() {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handleMinus}>-</button>
      <button onClick={handleSum}>+</button>
    </>
  );
}

export default App;
