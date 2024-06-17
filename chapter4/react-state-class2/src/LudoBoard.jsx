import { useState } from "react";

function LudoBoard(){
    let [move, setMove]=useState({blue: 0, yellow: 0, green: 0, red: 0})
    let [arr, setArr]= useState([" No move "]);

    function updateBlue(){
        // console.log(move.blue);
        setMove((prevMove)=>{
            return {...prevMove, blue: prevMove.blue+1}
        });
        // arr.push(" Blue move ")
        setArr((prevMove)=>{
            return [...prevMove, " Blue move "];
        });
        // console.log(arr);
    }

    function updateYellow(){
        setMove((prevMove)=>{
            return {...prevMove, yellow: prevMove.yellow+1}
        });
        setArr((prevMove)=>{
            return [...prevMove, " Yellow move "];
        })
    }

    function updateGreen(){
        setMove((prevMove)=>{
            return {...prevMove, green: prevMove.green+1}
        });
        setArr((prevMove)=>{
            return [...prevMove, " Green move "];
        })
    }

    function updateRed(){
        setMove((prevMove)=>{
            return {...prevMove, red: prevMove.red+1}
        });
        setArr((prevMove)=>{
            return [...prevMove, " Red move "];
        })
    }

    return(
        <>
            <p>Game Begins!</p>
            <p>{arr[arr.length-1]}</p>
            <div className="LudoBoard">
                <p>Blue moves = {move.blue}</p>
                <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves = {move.yellow}</p>
                <button style={{backgroundColor: "yellow", color: "black"}} onClick={updateYellow}>+1</button>
                <p>Green moves = {move.green}</p>
                <button style={{backgroundColor: "green"}} onClick={updateGreen}>+1</button>
                <p>Red moves = {move.red}</p>
                <button style={{backgroundColor: "red"}} onClick={updateRed}>+1</button>
            </div>
        </>
    )
}

export default LudoBoard; 