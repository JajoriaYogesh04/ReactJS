
import './App.css'
import LotteryGame2 from './LotteryGame2'
import LotteryGame1 from './LotteryGame1'
import LotteryGame from './LotteryGame'

import TicketNum from './TicketNum'
import Ticket from './Ticket'

function App() {

  return (
    <>
      {/* <LotteryGame1></LotteryGame1> */}
      {/* <LotteryGame2></LotteryGame2> */}
      {/* <Ticket ticket={[1,2,3,5,6,7,8]}></Ticket> */}
      <LotteryGame n={5} total={25}></LotteryGame>
      <LotteryGame n={8} total={40}></LotteryGame>
      <LotteryGame></LotteryGame>
    </>
  )
}

export default App
