import { useState } from "react"

export default function CommentsForm({addNewComment}){
    let [formData, setFormData]= useState({
        username: "",
        remarks: "",
        rating: 5,
    })

    let handleInputChange=(event)=>{
        setFormData((prevObj)=>{
            return {...prevObj, [event.target.name]:event.target.value}
        })
    }

    let handleFormSubmit=(event)=>{
        event.preventDefault();
        console.log(formData);
        addNewComment(formData);
        setFormData({
            username: "",
            remarks: "",
            rating: 5,
        })
    }

    return(
        <div style={{backgroundColor:"black", padding:"5rem", border:"5px solid #19D3DA"}}>
            <h2>Give a Comment!</h2>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="username">Username: </label><br />
                <input type="text" onChange={handleInputChange} name="username" value={formData.username} id="username" placeholder="Enter Username" style={{height:"1.5rem", width:"25rem"}}/><br /><br />
                <label htmlFor="remarks">Remarks: </label><br />
                <textarea onChange={handleInputChange} name="remarks" value={formData.remarks} id="remarks" placeholder="Enter Reviews..." style={{height:"3rem", width:"25rem"}}></textarea><br /><br />
                <label htmlFor="rating">Rating: </label><br />
                <input type="number" onChange={handleInputChange} name="rating" value={formData.rating} id="rating" placeholder="Rating" min={1} max={5} style={{height:"1.5rem", width:"5rem"}}/><br /><br />
                <button style={{borderRadius:"25px", backgroundColor:"#19D3DA", color:"black"}}>Add Comment</button>
            </form>
        </div>
    )   
}