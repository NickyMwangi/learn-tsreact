import { Route, Routes } from "react-router-dom";
import { Baselayout } from "./Components/layout";
import { DigitalClock } from "./pages/intro/DigitalClock";
import { Home } from "./pages/intro/Home";
import ColorPicker from "./pages/intro/colorPicker";
import { StopWatch } from "./pages/intro/stopwatch";
import { ToDoList } from "./pages/intro/todolist";
import { SampleDesign } from "./pages/intro/sampleDesign";
import EmployeeListing from "./pages/employee";
import { EmpCreate } from "./pages/employee/create";
import { TaskDataTable } from "./pages/datatables/task-datatable";

export function CustomRoutes() {
  return (
    <>
      <Routes>
        <Route element={<Baselayout />}>
          <Route path="/" element={<SampleDesign />} />
          <Route path="/home" element={<Home />} />
          <Route path="/color" element={<ColorPicker />} />
          <Route path="/to-do-list">
            <Route index element={<ToDoList />} />
            <Route path=":id" element={<ToDoList />} />
          </Route>
          <Route path="/stop-watch" element={<StopWatch />} />
          <Route path="/digital-clock" element={<DigitalClock />} />
          <Route path="/data-table" element={<TaskDataTable />} />
          <Route path="/Employee">
            <Route index element={<EmployeeListing />} />
            <Route path="create" element={<EmpCreate />} />
            <Route path=":id" element={<EmployeeListing />} />
          </Route>
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
