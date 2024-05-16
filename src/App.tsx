import { Button, Container, useColorMode } from "@chakra-ui/react";
import "./App.css";
import { CustomRoutes } from "./routes";

export function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <div className="App">
        <CustomRoutes />
        <Button onClick={toggleColorMode}>
          Toggle theme {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </div>
    </>
  );
}

export default App;
