import { Link, Outlet } from "react-router-dom";

export function Baselayout() {
  return (
    <>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Chakra UI</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/color">Color</Link>
            </li>
            <li>
              <Link to="/to-do-list">To do list</Link>
            </li>
            <li>
              <Link to="/stop-watch">Stop Watch</Link>
            </li>
            <li>
              <Link to="/digital-clock">Digital Clock</Link>
            </li>
          </ul>
        </nav>
        <Outlet></Outlet>
      </div>
    </>
  );
}
