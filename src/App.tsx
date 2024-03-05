import "./App.css";
import { TestUseEffect } from "./Components/testUseEffect";
// import { Button } from "./Components/Buttons";
// import { Student } from "./Components/students";
// import { ConditionsRendering } from "./Components/conditions";
// import { ListRendering } from "./Components/ListRender";
// import { MyStateTest } from "./Components/MyState";
// import ColorPicker from "./Components/colorPicker";
// import { UpdaterFunction } from "./Components/updaterFn";
// import { ToDoList } from "./Components/todolist";

export function App() {
  // const fruits = [
  //   { id: 1, name: "apple", calories: 95 },
  //   { id: 2, name: "orange", calories: 120 },
  //   { id: 3, name: "banana", calories: 56 },
  //   { id: 4, name: "coconut", calories: 32 },
  //   { id: 5, name: "pineapple", calories: 75 },
  // ];
  return (
    <>
      {/* <Button></Button>
      <h1>Testing Props</h1>
      <Student name="Nickson Mwangi" age={26} isStudent={false}></Student>
      <Student></Student>
      <h1>Conditional Rendering</h1>
      <ConditionsRendering></ConditionsRendering>
      <ConditionsRendering isLoggedIn={true} name="Nickson Mwangi"></ConditionsRendering>
      <h1>List Rendering</h1>
      {/* display only when there is fruits */}
      {/* {fruits.length > 0 && <ListRendering items={fruits}></ListRendering>}
      <h1>Hook, useState</h1>
      <MyStateTest></MyStateTest>
      <h1>Color Picker</h1>
      <ColorPicker></ColorPicker>

      <h1>Updater Function</h1>
      <UpdaterFunction></UpdaterFunction> */}
      {/* <ToDoList></ToDoList> */}
      <TestUseEffect></TestUseEffect>
    </>
  );
}

export default App;
