import { useState, useEffect, useRef } from 'react';
import './Counter.css'; // Import the stylesheet

function Counter() {
    const [hacks, setCounter] = useState(0);
    const [increment, setIncrement] = useState(0);

    // Create a ref to store the current value of the increment state variable
    const incrementRef = useRef(increment);

    // Call the setInterval function when the Counter component is first rendered
    useEffect(() => {
        const interval = setInterval(() => {
            // Use the value of the increment ref to increment the hacks counter
            setCounter(prevCounter => prevCounter + incrementRef.current);
        }, 1000);

        // Clean up the interval when the Counter component is unmounted
        return () => clearInterval(interval);
    }, []);

    // Update the value of the increment ref when the increment state variable is updated
    useEffect(() => {
        incrementRef.current = increment;
    }, [increment]);

    return (
        <div>
            <div className="tools">
                <div id="hack-box">
                    <div id="hack-box-label">Devices hacked:</div>
                    <hr></hr>
                    <div id="hack-box-value" data-testid="hacks">{hacks}</div>
                    <hr></hr>
                </div>
                <button className="hack-button" onClick={() => setCounter(hacks + 1)}>
                    <hr></hr>
                    <div className="label">Hack</div>
                    <div className="icon">🖧</div>
                    <hr></hr>
                </button>
            </div>
            <div>Hackers: {increment}</div>
            <button className="hire-button" onClick={() => setIncrement(prevIncrement => prevIncrement + 1)}>Hire 🧑‍💻</button>
            <button className="fire-button"
                onClick={() => {
                    // Check if the increment value is greater than 0 before decrementing it
                    if (increment > 0) {
                        setIncrement(prevIncrement => prevIncrement - 1);
                    }
                }}
            >
                Fire 🧑‍🔧
            </button>
            <button className="reset-button" onClick={() => setIncrement(0)}>Reset Hackers</button>
        </div>
    );
}

export default Counter;
