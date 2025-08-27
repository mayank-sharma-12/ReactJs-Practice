import React from "react";

function handleClick() {
  console.log("Hello There!");
}

function handleMouseOver(){
    console.log("Bye Bye!");
}

function handleDblClick(){
    console.log("Double Click")
}

function Button() {
  return (
    <>
      <button onClick={handleClick}>Click me!</button>
      <p onMouseOver={handleMouseOver}>This is my mouse over paragraph.</p>
      <button onDoubleClick={handleDblClick}>Double Click</button>
    </>
  );
}

export default Button;
