import { Button } from "../Components/Buttons";
import { MyStateTest } from "../Components/MyState";
import { ListRendering } from "./ListRender";
import { ConditionsRendering } from "./conditions";
import { Student } from "./students";
import { UpdaterFunction } from "./updaterFn";

export function Home() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 120 },
    { id: 3, name: "banana", calories: 56 },
    { id: 4, name: "coconut", calories: 32 },
    { id: 5, name: "pineapple", calories: 75 },
  ];

  return (
    <>
      <h3>Button useState</h3>
      <Button></Button>

      <h3>Testing Props</h3>
      <Student name="Nickson Mwangi" age={26} isStudent={false}></Student>
      <Student></Student>

      <h3>Conditional Rendering</h3>
      <ConditionsRendering></ConditionsRendering>
      <ConditionsRendering isLoggedIn={true} name="Nickson Mwangi"></ConditionsRendering>

      <h3>List Rendering</h3>
      {fruits.length > 0 && <ListRendering items={fruits}></ListRendering>}
      <h3>Hook, useState</h3>
      <MyStateTest></MyStateTest>

      <h3>Updater Function</h3>
      <UpdaterFunction></UpdaterFunction>
    </>
  );
}
