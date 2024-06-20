
import { useState } from 'react'
import './App.css'

function App() {
  let [name, setName]= useState("");

  let changeName=(event)=>{
    // console.log(event.target.value);
    setName(event.target.value)
  }

  return (
    <>
      <h1>REACT FORMS</h1>
      <form>
        <input type="text" value={name} onChange={changeName} placeholder='Enter your name' style={{height:"2rem", width:"25rem"}}/><br/><br/>
        <button>Submit</button>
      </form>
    </>
  )
}

export default App
