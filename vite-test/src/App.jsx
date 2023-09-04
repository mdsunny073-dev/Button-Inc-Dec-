import { useState } from 'react';
import './App.css';

function App() {
  const [test, setTest] = useState(0);

  const handleIncrement = () => {
    const count = test + 1;
    setTest(count);
  };

  const handleDecrement = () => {
    if (test > 0) {
      const count = test - 1;
      setTest(count);
    }
  };

  return (
    <>
      <h1>Count : {test}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}

export default App;
