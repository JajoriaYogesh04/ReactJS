import { useState } from "react";

function LotteryGame(){
    let [Lottery, setLottery]= useState(); 

    function getNewTicket(){
        // console.log("New Ticket");
        let num= Math.floor(Math.random()*1000);
        // console.log(num);
        setLottery(num);
    }

    return(
        <div style={{backgroundColor:"grey", height:"17rem", width:"35rem", border:"2px solid black", borderRadius:"20px"}}>
            <h1>Lottery</h1>
            <h2>Lottery Ticket {Lottery}</h2>
            <button onClick={getNewTicket}>Get New Ticket</button>
        </div>
    )
}

export default LotteryGame;