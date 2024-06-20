import { useState } from "react";
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username can not be empty';
    } 
  
    return errors;
};

export default function CommentsForm({addNewComment}){
    // let [formData, setFormData]= useState({
    //     username: "",
    //     remarks: "",
    //     rating: 5,
    // })
    const formik = useFormik({
        initialValues: {
          username: '',
          remarks: '',
          rating: 5,
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
    });

    

    // let handleInputChange=(event)=>{
    //     setFormData((prevObj)=>{
    //         return {...prevObj, [event.target.name]:event.target.value}
    //     })
    // }

    // let handleFormSubmit=(event)=>{
    //     event.preventDefault();
    //     // console.log(formData);
    //     addNewComment(formData);
    //     setFormData({
    //         username: "",
    //         remarks: "",
    //         rating: 5,
    //     })
    // }

    return(
        <div style={{backgroundColor:"black", padding:"5rem", border:"5px solid #19D3DA", borderRadius:"25px"}}>
            <h2>Give a Comment!</h2>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username </label><br />
                <input type="text" onChange={formik.handleChange} name="username" value={formik.values.username} id="username" placeholder="Enter Username" style={{height:"1.5rem", width:"25rem"}}/><br /><br />
                {formik.errors.username ? <div style={{backgroundColor:"red", borderRadius:"25px"}}>{formik.errors.username}</div> : null}
                <label htmlFor="remarks">Remarks </label><br />
                <textarea onChange={formik.handleChange} name="remarks" value={formik.values.remarks} id="remarks" placeholder="Enter Reviews..." style={{height:"3rem", width:"25rem"}}></textarea><br /><br />
                <label htmlFor="rating">Rating </label><br />
                <input type="number" onChange={formik.handleChange} name="rating" value={formik.values.rating} id="rating" placeholder="Rating" min={1} max={5} style={{height:"1.5rem", width:"5rem"}}/><br /><br />
                <button type="submit" style={{borderRadius:"25px", backgroundColor:"#19D3DA", color:"black"}}>Add Comment</button>
            </form>
        </div>
    )   
}