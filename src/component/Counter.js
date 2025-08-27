import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    let countStart = () => {
        setCount(count + 1);
    }
    
    return (
        <> 
        <h1>State in React Js</h1>
        <h3>Counter : {count}</h3>
        <button onClick={countStart}>Click here!</button>
        </>
     );
}

export default Counter;