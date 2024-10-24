import React from "react";
import {useState, useEffect} from 'react';

const NotHome = () => {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (count < 0) {
            setCount(0);
        }
        if (count > 5) {
            setMessage("You passed 5!");
        }
    }, [count]); //Re-run effect every time count changes.

    return (
        <div>
            <h2>Not Home Page</h2>
            <p>Count: {count}</p>
            <button onClick = {() => setCount(count + 1)}>Click me</button>
            <p>{message}</p>
        </div>    
)};

export default NotHome;
