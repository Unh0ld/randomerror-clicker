import React from 'react';
import { useState } from 'react';

function Counter() {
    const [hacks, setCounter] = useState(0);
    return (
        <div>
          <div>{hacks}</div>
          <button onClick={() => setCounter(hacks+1)}>Hack 🖧</button>
        </div>
        );
  }

  export default Counter;