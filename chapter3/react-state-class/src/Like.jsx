import { useState } from "react";

function Like(){
    let [state, setState]= useState(false)
    let [count, setCount]= useState(0)
    let likeStyle={color: "#fd0e35", fontSize: "100px"};
    let dislikeStyle={color: "#D3D3D3", fontSize: "100px"};
    function isClicked(){
        // console.log("Clicked");
        setState(!state);
        setCount(count+1);
    }
    return(
        <>
            <p onClick={isClicked}>{state ? (<i className="fa-solid fa-heart" style={likeStyle}></i>) : (<i className="fa-regular fa-heart" style={dislikeStyle}></i>)}</p>
            <p onClick={isClicked}>{state ? ("Dislike") : ("Like")}</p>
            <h2 onClick={isClicked}>Count: {count}</h2>
        </>
    )
}

export default Like;