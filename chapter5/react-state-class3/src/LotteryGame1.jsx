import { useState } from "react";

function LotteryGame1(){
    let [Lottery, setLottery]= useState({Lotnum: 999, win: false});  
    function getNewTicket(){
        // console.log("New Ticket");
        let num1= Math.floor(Math.random()*10);
        let num2= Math.floor(Math.random()*10);
        let num3= Math.floor(Math.random()*10);
        // let num1=5;
        // let num2=5; 
        // let num3=5;
        let num = num1*100 + num2*10 + num3;
        // console.log(num1, num2, num3, num);
        if(num1 + num2 + num3 === 15){
            setLottery({Lotnum: num, win: true});
        }
        else{
            setLottery({Lotnum: num, win: false});
        }
    }

    return(
        <div style={{backgroundColor:"white", color:"black", height:"25rem", width:"35rem", border:"5px solid black", borderRadius:"20px"}}>
            <h1>{ Lottery.win ? `CONGRATULATION...\nYOU WON!!` : "LOTTERY" }</h1>
            <h2>Lottery Ticket</h2>
            <h1>{ Lottery.Lotnum }</h1>
            <button onClick={getNewTicket} style={{height:"3rem", width:"15rem", borderRadius:"0px", backgroundColor:"green", fontWeight:"700"}}>Get New Ticket</button>
        </div>
    )
}

export default LotteryGame1;
