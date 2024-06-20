import { useState } from "react"
import CommentsForm from "./CommentsForm"

export default function Comment(){
    let [comments, setComments]= useState([{
        username: "James",
        remarks: "Great job!",
        rating: 4,
    }])

    let addComment= (comment)=>{
        setComments((currComments)=>[...currComments, comment])
    }

    return(
        <div>
            {comments.map((comment, idx)=>(
                <div key={idx} style={{border:"5px solid #19D3DA", backgroundColor:"black", margin:"1rem 0rem 1rem 0rem", borderRadius:"25px"}}>
                    <p>{comment.remarks}</p>
                    <p>~{comment.username}&nbsp;<i>({comment.rating})</i></p>
                </div>  
            ))}
            <hr />
            <CommentsForm addNewComment={addComment}></CommentsForm>
        </div>
    )
}