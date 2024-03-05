export function Button() {
  let btn = {
    backgroundColor: "yellow",
  };

  const handleClick = () => console.log("Auch! you clicked me!");
  const handleClickTwo = (name: string) => console.log(`Auch! ${name} you clicked me!`);
  const handleEvent = (e: any) => (e.target.textContent = "Auch! you clicked me");
  return (
    // <button style={btn} onClick={handleClick}>
    //   Click me
    // </button>

    // <button onClick={() => handleClickTwo("Nickson")}>Click me again</button>
    <button style={btn} onClick={(e) => handleEvent(e)}>
      Click me again
    </button>
  );
}
