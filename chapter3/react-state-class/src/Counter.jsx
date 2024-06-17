import { useState } from "react";

function Counter(){
    // let count = 0;
    let [count, setCount] = useState(0);
    // console.log(arr);
    console.log(`Outer: ${count}`)

    function increaseCount(){
        setCount(count+1)
        console.log(`Inner: ${count}`)
    }
    return(
        <>
            <h1>count = {count}</h1>
            <button onClick={increaseCount}>Increase Count</button>        
        </>
    )
}

export default Counter