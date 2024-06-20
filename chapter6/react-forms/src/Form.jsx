import { useState } from 'react'

export default function Form(){
    let [name, setName]= useState("");

    let changeName=(event)=>{
        // console.log(event.target.value);
        setName(event.target.value)
    }

    return (
        <>
        <h1>REACT FORMS</h1>
        <form>
            <label htmlFor="username">Username: </label>
            <input type="text" value={name} onChange={changeName} id='username' placeholder='Enter your name' style={{height:"1.5rem", width:"25rem"}}/><br/><br/>
            <button>Submit</button>
        </form>
        </>
    )
}