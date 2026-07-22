import { PointerEventsCheckLevel } from "@testing-library/user-event";
import { useState } from "react";

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter((prevCounter) => ++prevCounter);
    };

    const decrement = () => {
        setCounter((prevCounter) => --prevCounter);
    };

    return(
        <>
            <h2 data-testid="counter">{counter}</h2>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
        </>
    );
};