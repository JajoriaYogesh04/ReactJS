import { useState } from "react";
import { getLotnum, sumArr} from "./helper";
import "./LotteryGame.css"
import Ticket from "./Ticket";
import Button from "./Button";

function LotteryGame({n=3, winCondition}){
    let [Lottery, setLottery]= useState({Lotnum: [], win: false});  

    function getNewTicket(){
        let numArr= getLotnum(n);
        // console.log(numArr);
        // let sum= sumArr(numArr);
        // console.log(sum);
        // console.log(winCondition);
        if(winCondition(numArr)){
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
            <Button action={getNewTicket}></Button>
        </div>
    )
}

export default LotteryGame;