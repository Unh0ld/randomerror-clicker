import React from 'react';
import { useState } from 'react';

/* Counter component with a button that increments a counter.
additionally it contains a auto-incrementing timer that increments the counter every second by a certain amount called "increment" */
function Counter() {
    const [hacks, setCounter] = useState(0);
    const [increment, setIncrement] = useState(0);

    return (
        <div>
            <div>Devices hacked: {hacks}</div>
            <button onClick={() => setCounter(hacks+1)}>Hack 🖧</button>
            <div>Hackers: {increment}</div>
            <button onClick={() => setIncrement(prevIncrement => prevIncrement+1)}>Hire 🧑‍💻</button>
            <button onClick={() => setIncrement(prevIncrement => prevIncrement-1)}>Fire 🧑‍🔧</button>
            <button onClick={() => setIncrement(0)}>Reset Hackers</button>

            <button onClick={() => setInterval(() => setCounter(prevCounter => prevCounter + increment), 1000)}>Start Hackers</button>     
        </div>
        );
  }

  export default Counter;