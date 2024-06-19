import { useState } from "react";
import { getLotnum, sumArr} from "./helper";
import "./LotteryGame.css"
import Ticket from "./Ticket";

function LotteryGame({n=3, total=15}){
    let [Lottery, setLottery]= useState({Lotnum: [], win: false});  

    function getNewTicket(){
        let numArr= getLotnum(n);
        // console.log(numArr);
        let sum= sumArr(numArr);
        // console.log(sum);
        if(sum == total){
            setLottery({Lotnum: numArr, win: true});
        }
        else{
            setLottery({Lotnum: numArr, win: false});
        }
    }

    return(
        <div className="lottery-ticket">
            <h1>{ Lottery.win ? `CONGRATULATION...\nYOU WON!!` : "LOTTERY" }</h1>
            <Ticket ticket={Lottery.Lotnum}></Ticket>
            <button onClick={getNewTicket}>Get New Ticket</button>
        </div>
    )
}

export default LotteryGame;