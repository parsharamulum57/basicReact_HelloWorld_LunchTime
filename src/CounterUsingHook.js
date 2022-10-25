

import './CounterUsingHook.css';
import {useState} from 'react'

export default function CounterUsingHook()
{
    const [count,setCount]=useState(0);

    //console.log("count ",count);
    function resetCount()
    {
        setCount(0);
    }

    function increaseCount()
    {
        setCount(count+1);
    }

    function decreaseCount()
    {
        setCount(count-1);
    }

    return(
        <div id="CounterUsingHook">
            <div id="count">
                <span>Counter value is : {count}</span>
            </div>
            <div id="buttons">
                <button onClick={resetCount}>Reset</button>
                <button onClick={increaseCount}>Increase</button>
                <button onClick={decreaseCount}>Decrease</button>
            </div>
        </div>
    )
}