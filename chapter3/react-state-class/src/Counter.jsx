import { useState } from "react";

function init(){
    console.log("Random number Initialized");
    return Math.random();
}

function Counter(){
    // let count = 0;
    let [count, setCount] = useState(init());
    // console.log(arr);
    console.log(`Outer: ${count}`)

    function increaseCount(){
        setCount((currCount)=>{
            // console.log(`Current1: ${currCount}`);
            return currCount+1;
        });
        // console.log(`Inner1: ${count}`);
        // setCount((currCount)=>{
        //     console.log(`Current2: ${currCount}`);
        //     return currCount+1;
        // });
        // console.log(`Inner2: ${count}`);
        // setCount(25);
    }
    return(
        <>
            <h1>count = {count}</h1>
            <button onClick={increaseCount}>Increase Count</button>        
        </>
    )
}

export default Counter