import { useState } from "react";

export function MyStateTest() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(20);
  const updateName = () => {
    setName("Nickson");
    setAge(30);
  };

  const IncrementAge = () => {
    setAge(age + 1);
  };
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={updateName}> SetName</button>
      <button onClick={IncrementAge}> Increment Age</button>
    </div>
  );
}
