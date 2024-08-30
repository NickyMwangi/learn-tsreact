import { useEffect, useState } from "react";

export const EmployeeHook = () => {
  const [employees, employeeChange] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((rsp) => {
        return rsp.json();
      })
      .then((resp) => {
        employeeChange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return { employees };
};
