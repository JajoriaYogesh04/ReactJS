import { useState, useEffect } from "react"

export default function Counter(){
    let [count, setCount]= useState(0);

    let incCount=()=>{
        setCount((currCount)=>(currCount+1));
    }
    useEffect(function printSomething(){
        console.log("I am useEffect");
    })

    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={incCount}>+1</button>
        </div>
    )
}