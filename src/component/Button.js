import React from "react";

function printConsole() {
  console.log("Hello There!");
}

function printBye(){
    console.log("Bye Bye!");
}

function Button() {
  return (
    <>
      <button onClick={printConsole}>Click me!</button>
      <p onClick={printBye}>This is my clickable paragraph.</p>
    </>
  );
}

export default Button;
