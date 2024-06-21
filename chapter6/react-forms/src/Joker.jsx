import { useState, useEffect } from "react";


export default function Joker(){
    let [joke, setJoke]= useState({})

    let URL="https://official-joke-api.appspot.com/random_joke";

    let getJoke= async ()=>{
        let response= await fetch(URL);
        let jsonResponse= await response.json()
        // console.log(jsonResponse);
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
    }

    useEffect(()=>{
        async function getFirstJoke(){
            let response= await fetch(URL);
            let jsonResponse= await response.json()
            // console.log(jsonResponse);
            setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
        }
        getFirstJoke();
    }, [])

    return(
        <div style={{backgroundColor:"black", padding:"2rem", border:"5px solid blue"}}>
            <h1>JOKER!</h1><br /><br />
            <h2>{joke.setup}</h2><br />
            <h2>{joke.punchline}</h2><br />
            <button onClick={getJoke}>Get New joke</button>
        </div>
    )
}