import { useEffect, useState } from "react";

export function TestUseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `my count: ${count}`;
  }, [count]);

  const addCount = () => {
    setCount((c) => c + 1);
  };

  const SubstractCount = () => {
    setCount((c) => c - 1);
  };

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={SubstractCount}>Minus</button>
    </>
  );
}
/**
 * useEffect
 * Its a react hook that tells react to DO THIS CODE WHEN
 * a. Component re-renders
 * b. Component mounts
 * c. state of value changes
 * Runs after every re-render
 * Runs only on mount
 * Runs on mount + when value changes
 * useEffect(function, dependencies). Dependencies defines when is should change value. What should it check to change value
 * USED
 * 1. Handle event listeners
 * 2. DOM manipulation
 * 3. Subscriptions (real-time updates)
 * 4. Fetching Data from an API.
 * 5. Clean up when a component unmounts
 */
