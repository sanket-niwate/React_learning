import React, { useState } from "react";

// function Sanket() {
//     return(
//         <h1>sanket niwate</h1>
//     )
// }

// export default Sanket



function Counter() {
    const [count, setCount] = useState(0); // Initialize state
  
    return (
      <div>
        <p>Current Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    );
  }

export default Counter;