import React, { useState } from 'react';
import { createRoot } from "react-dom/client";
import './calculator.css';
const KEYS = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '.', '0', '00', '/'];

function Calculator() {
    const [result, setResult] = useState('');

    const handleClick = (e) => {
        console.dir(e)
        var res;
        if (result !== 'Error') {
            res = result.concat(e.target.name);
        } else {
            res = e.target.name;
        }
        setResult(res);
    };

    const calculate = () => {
        if (result === '' || result === 'Error') return;
        try {
            setResult(eval(result).toString());
        } catch (error) {
            setResult('Error');
        }
    };

    const clear = () => {
        setResult('');
    };

    return (
        <div className="calculator">
            <input type="text" value={result} readOnly/>
            <div className="keypad">
                {KEYS.map(digit => (
                    <button key={digit} name={digit} onClick={handleClick}>{digit}</button>
                ))}
                <button className='clear' onClick={clear}>Clear</button>
                <button className='equals' onClick={calculate}>=</button>
            </div>
        </div>
    );
}

const root = document.createElement("div");
document.body.appendChild(root);
createRoot(root).render(<Calculator />);