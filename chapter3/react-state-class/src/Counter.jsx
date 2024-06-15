import { useState } from "react";

function Counter(){
    // let count = 0;
    let [count, setCount] = useState(0);
    // console.log(arr);

    function increaseCount(){
        setCount(count+1)
        console.log(count)
    }
    return(
        <>
            <h1>count = {count}</h1>
            <button onClick={increaseCount}>Increase Count</button>        
        </>
    )
}

export default Counter