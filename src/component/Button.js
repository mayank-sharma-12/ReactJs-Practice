import React from "react";

function handleConsole() {
  console.log("Hello There!");
}

function handlePrint(){
    console.log("Bye Bye!");
}

function handleDblClick(){
    console.log("Double Click")
}

function Button() {
  return (
    <>
      <button onClick={handleConsole}>Click me!</button>
      <p onMouseOverCapture={handlePrint}>This is my mouse over paragraph.</p>
      <button onDoubleClick={handleDblClick}>Double Click</button>
    </>
  );
}

export default Button;
