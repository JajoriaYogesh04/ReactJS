import { useState } from "react";
import { getLotnum, sumArr} from "./helper";

function LotteryGame(){
    let [Lottery, setLottery]= useState({Lotnum: [], win: false});  

    function getNewTicket(){
        // console.log("New Ticket");
        // let num1= Math.floor(Math.random()*10);
        // let num2= Math.floor(Math.random()*10);
        // let num3= Math.floor(Math.random()*10);
        // let num1=5;
        // let num2=5; 
        // let num3=5;
        // let num = num1*100 + num2*10 + num3;
        // console.log(num1, num2, num3, num);
        let numArr= getLotnum(3);
        // console.log(numArr);
        // setLottery({Lotnum: numArr, win: true});
        let sum= sumArr(numArr);
        console.log(sum);
        if(sum == 15){
            setLottery({Lotnum: numArr, win: true});
        }
        else{
            setLottery({Lotnum: numArr, win: false});
        }
        // if(num1 + num2 + num3 === 15){
        //     setLottery({Lotnum: numArr, win: true});
        // }
        // else{
        //     setLottery({Lotnum: numArr, win: false});
        // }
    }

    return(
        <div style={{backgroundColor:"white", color:"black", height:"16.5rem", width:"35rem", border:"5px solid black", borderRadius:"20px", padding:"5rem"}}>
            <h1>{ Lottery.win ? `CONGRATULATION...\nYOU WON!!` : "LOTTERY" }</h1>
            <h2>Lottery Ticket { Lottery.Lotnum }</h2>
            <button onClick={getNewTicket} style={{height:"3rem", width:"15rem", borderRadius:"0px", backgroundColor:"green", fontWeight:"700"}}>Get New Ticket</button>
        </div>
    )
}

export default LotteryGame;