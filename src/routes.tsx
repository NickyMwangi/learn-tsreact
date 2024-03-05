import { Route, Routes } from "react-router-dom";
import { Baselayout } from "./Components/layout";
import { DigitalClock } from "./pages/DigitalClock";
import { Home } from "./pages/Home";
import ColorPicker from "./pages/colorPicker";
import { StopWatch } from "./pages/stopwatch";
import { ToDoList } from "./pages/todolist";

export function CustomRoutes() {
  return (
    <>
      <Routes>
        <Route element={<Baselayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/color" element={<ColorPicker />} />
          <Route path="/to-do-list">
            <Route index element={<ToDoList />} />
            <Route path=":id" element={<ToDoList />} />
          </Route>
          <Route path="/stop-watch" element={<StopWatch />} />
          <Route path="/digital-clock" element={<DigitalClock />} />
        </Route>
        <Route
          path="*"
          element={
            <>
              <h1>Not found</h1>
            </>
          }
        />
      </Routes>
    </>
  );
}
