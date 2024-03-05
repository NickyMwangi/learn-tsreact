import { Button, Container, useColorMode } from "@chakra-ui/react";
import "./App.css";
import { CustomRoutes } from "./routes";

export function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Container maxW="container.xl" py={10}>
        <CustomRoutes />
        <Button onClick={toggleColorMode}>
          Toggle theme {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </Container>
    </>
  );
}

export default App;
