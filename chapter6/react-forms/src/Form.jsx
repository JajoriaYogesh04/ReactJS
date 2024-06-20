import { useState } from 'react'

export default function Form(){
    // let [username, setUsername]= useState("");
    // let [name, setName]= useState("");
    let [formData, setFormData]= useState({
        name: "",
        username: "",
        password: "",
    });

    // let changeName=(event)=>{
    //     // console.log(event.target.value);
    //     setName(event.target.value)
    // }
    // let changeUsername=(event)=>{
    //     // console.log(event.target.value);
    //     setUsername(event.target.value)
    // }
    let changeFormData= (event)=>{
        // console.log(event.target.name);
        // console.log(event.target.value);
        // let fieldName= event.target.name;
        // let fieldValue= event.target.value;
        // console.log(fieldName, fieldValue)
        setFormData((prevObj)=>{
            // prevObj[fieldName]= fieldValue;
            // return({...prevObj, [fieldName]: fieldValue});
            return({...prevObj, [event.target.name]: event.target.value});
        })
    }

    let handleSubmit=(event)=>{
        // console.log(event.preventDefault)
        event.preventDefault();
        setFormData({
            name: "",
            username: "",
            password: "",
        });
    }

    return (
        <>
        <h1>REACT FORMS</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" value={formData.name} name='name' onChange={changeFormData} id='name' placeholder='Enter your name' style={{height:"1.5rem", width:"25rem"}}/><br/><br/>
            <label htmlFor="username">Username: </label>
            <input type="text" value={formData.username} name='username' onChange={changeFormData} id='username' placeholder='Enter your username' style={{height:"1.5rem", width:"25rem"}}/><br/><br/>
            <label htmlFor="password">Password: </label>
            <input type="password" value={formData.password} name='password' onChange={changeFormData} id='username' placeholder='Enter password' style={{height:"1.5rem", width:"25rem"}}/><br/><br/>
            <button>Submit</button>
        </form>
        </>
    )
}