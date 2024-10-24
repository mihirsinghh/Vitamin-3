import React from "react";
import {useState, useEffect} from 'react';

const NotHome = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {

    }, [count]); //Re-run effect every time count changes.

    return (
        <div>
            <h2>Not Home Page</h2>
            <p>Count: {count}</p>
            <button onClick = {() => setCount(count + 1)}>Click me</button>
        </div>    
)};

export default NotHome;
