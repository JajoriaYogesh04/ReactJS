import { useState, useEffect } from "react"

export default function Counter(){
    let [countx, setCountx]= useState(0);
    let [county, setCounty]= useState(0);

    let incCountx=()=>{
        setCountx((currCountx)=>(currCountx+1));
    }
    let incCounty=()=>{
        setCounty((currCounty)=>(currCounty+1));
    }
    useEffect(function printSomething(){
        console.log("I am useEffect");
    },[])

    return(
        <div>
            <h1>Countx: {countx}</h1>
            <button onClick={incCountx}>+1</button>
            <h1>County: {county}</h1>
            <button onClick={incCounty}>+1</button>
        </div>
    )
}