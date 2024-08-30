import { useState } from "react";

export function UpdaterFunction() {
  const [count, setCount] = useState(0);
  function Increment() {
    // use of an arrow function helps to update count
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);

    //this maintains the state of count. If count is 0 it will only increment by 1
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
  }

  function Decrement() {
    // use of an arrow function helps to update count
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  }

  function reset() {
    // use of an arrow function helps to update count
    setCount(0);
  }

  return (
    <div>
      <p>Count {count}</p>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={Increment}>Increment</button>
    </div>
  );
}
