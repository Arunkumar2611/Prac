import React, { useState } from "react";
import { Module } from "./Module";

export default function Main() {
    const [input, setInput] = useState([]);
    const [obj, setObj] = useState([]);

    const handleClick = () => {
        setObj([...obj, ...obj]);
        setInput([...input, <Module obj={obj} setObj={setObj} />]);
    };

    console.log("objeee", obj);
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <button onClick={handleClick}>Click</button>
            {input.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
    );
}
