import React from "react";
import { useState } from "react";

const ContentCounter = () => {
    // useState cannot be called conditionally
  const [counter, setCounter] = useState(0);

  function increment(){
    // two setCounter with counter var will not increment twice
    // it'll be overridded
    // setCounter(counter + 1)
    // setCounter(counter + 1)

    // correct method
    // while working with previous state
    setCounter((prev) => prev + 1)
    setCounter((prev) => prev + 1)
  }

  function decrement(){
    // same as increment here
    // setCounter(counter - 1)

    // correct method
    setCounter((prev) => prev - 1)
  }

  return(
    <main className="content2">
        <h1>{counter}</h1>
        <div className="btn-counter">
            <button onClick={ decrement}>Decrease</button>
            <button onClick={ () => { setCounter( 0 ) } }>Reset</button>
            <button onClick={increment}>Increase</button>
        </div>
    </main>
) 
};

export default ContentCounter;
