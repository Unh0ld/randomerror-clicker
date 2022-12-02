import React, { useState, useEffect } from 'react';

/* Counter component with a button that increments a counter.
additionally it contains a auto-incrementing timer that increments the counter every second by a certain amount called "increment" */
function Counter() {
    const [hacks, setCounter] = useState(0);
    const [increment, setIncrement] = useState(0);

    // Call the setInterval function when the Counter component is first rendered
    useEffect(() => {
        const interval = setInterval(() => {
            // Increment the hacks counter by the increment value every second
            setCounter(prevCounter => prevCounter + increment);
        }, 1000);

        // Clean up the interval when the Counter component is unmounted
        return () => clearInterval(interval);
    }, [increment]);

    return (
        <div>
            <div>Devices hacked: {hacks}</div>
            <button onClick={() => setCounter(hacks+1)}>Hack 🖧</button>
            <div>Hackers: {increment}</div>
            <button onClick={() => setIncrement(prevIncrement => prevIncrement+1)}>Hire 🧑‍💻</button>
            <button
                onClick={() => {
                    // Check if the increment value is greater than 0 before decrementing it
                    if (increment > 0) {
                        setIncrement(prevIncrement => prevIncrement-1);
                    }
                }}
            >
                Fire 🧑‍🔧
            </button>
            <button onClick={() => setIncrement(0)}>Reset Hackers</button>
        </div>
        );
  }

  export default Counter;