
import './App.css'
import LotteryGame2 from './LotteryGame2'
import LotteryGame1 from './LotteryGame1'
import LotteryGame from './LotteryGame'
import { sumArr} from "./helper";

import TicketNum from './TicketNum'
import Ticket from './Ticket'

function App() {

  let winCondition= (ticket)=>{
    return sumArr(ticket)===15;
    // return ticket.every((num)=> num===ticket[0]);
  }

  return (
    <div className='lottery-game'>
      {/* <LotteryGame1></LotteryGame1> */}
      {/* <LotteryGame2></LotteryGame2> */}
      {/* <Ticket ticket={[1,2,3,5,6,7,8]}></Ticket> */}
      <LotteryGame n={3} winCondition={winCondition}></LotteryGame>
      {/* <LotteryGame n={2} total={10}></LotteryGame>
      <LotteryGame n={3} total={15}></LotteryGame>
      <LotteryGame n={4} total={20}></LotteryGame>
      <LotteryGame n={5} total={25}></LotteryGame>
      <LotteryGame n={6} total={30}></LotteryGame>
      <LotteryGame n={7} total={35}></LotteryGame>
      <LotteryGame n={8} total={40}></LotteryGame>
      <LotteryGame n={9} total={45}></LotteryGame> */}
    </div>
  )
}

export default App
