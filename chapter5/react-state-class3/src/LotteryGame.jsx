import { useState } from "react";
import { getLotnum, sumArr} from "./helper";
import "./LotteryGame.css"

function LotteryGame(){
    let [Lottery, setLottery]= useState({Lotnum: [], win: false});  

    function getNewTicket(){
        let numArr= getLotnum(5);
        // console.log(numArr);
        let sum= sumArr(numArr);
        // console.log(sum);
        if(sum == 15){
            setLottery({Lotnum: numArr, win: true});
        }
        else{
            setLottery({Lotnum: numArr, win: false});
        }
    }

    return(
        <div className="lottery-ticket">
            <h1>{ Lottery.win ? `CONGRATULATION...\nYOU WON!!` : "LOTTERY" }</h1>
            <h2>Lottery Ticket</h2>
            <h1>{ Lottery.Lotnum }</h1>
            <button onClick={getNewTicket}>Get New Ticket</button>
        </div>
    )
}

export default LotteryGame;