import React from 'react'
import Subrule from './Subrule';

const Main = () => {
    const [input, setInput] = useState([]);
    const [obj, setObj] = useState([]);

    const handleClick = () => {
        setObj([...obj, ...obj]);
        setInput([...input, <Subrule obj={obj} setObj={setObj} />]);
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

export default Main