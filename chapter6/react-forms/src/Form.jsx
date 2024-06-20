import { useState } from 'react'

export default function Form(){
    let [username, setUsername]= useState("");
    let [name, setName]= useState("");

    let changeName=(event)=>{
        // console.log(event.target.value);
        setName(event.target.value)
    }
    let changeUsername=(event)=>{
        // console.log(event.target.value);
        setUsername(event.target.value)
    }

    return (
        <>
        <h1>REACT FORMS</h1>
        <form>
            <label htmlFor="name">Name: </label>
            <input type="text" value={name} onChange={changeName} id='name' placeholder='Enter your name' style={{height:"1.5rem", width:"25rem"}}/><br/><br/>
            <label htmlFor="username">Username: </label>
            <input type="text" value={username} onChange={changeUsername} id='username' placeholder='Enter your username' style={{height:"1.5rem", width:"25rem"}}/><br/><br/>
            <button>Submit</button>
        </form>
        </>
    )
}