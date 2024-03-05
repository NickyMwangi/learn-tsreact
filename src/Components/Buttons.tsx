import { Box } from "@chakra-ui/react";

export function Button() {
  const handleClick = () => console.log("Auch! you clicked me!");
  const handleClickTwo = (name: string) => console.log(`Auch! ${name} stop clicking me!`);
  const handleEvent = (e: any) => (e.target.textContent = "Auch! you clicked me");
  return (
    <>
      <div className="App">
        <Box bg="tomato" w="120px" h="152px">
          This is button box
        </Box>
      </div>

      <button className="up-btn" onClick={handleClick}>
        Click me
      </button>
      <button className="down-btn" onClick={() => handleClickTwo("Nickson")}>
        Click me
      </button>
      <button className="add-button" onClick={(e) => handleEvent(e)}>
        Click me
      </button>
    </>
  );
}
