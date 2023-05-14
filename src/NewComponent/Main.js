import React, { useEffect, useState } from "react";
import { Module } from "./Module";

export default function Main() {
    const [input, setInput] = useState([]);
    const [obj, setObj] = useState([]);
    const level = 1;
    const arr = []

    const ping = () => {
        console.log("i am pinging you------------");
    }

    useEffect(() => {
        setObj([...obj, level])
        // arr.push(<Module obj={obj} setObj={setObj} level={level} arr={arr} ping={ping} />)
        setInput([...input, <Module obj={obj} setObj={setObj} level={level} arr={arr} ping={ping} />]);

    }, [])


    // console.log("input", input);
    console.log("Object nested", obj);


    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            {input.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
    );
}
