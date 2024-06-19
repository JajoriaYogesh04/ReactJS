import TicketNum from './TicketNum'

export default function Ticket(){
    return(
        <div>
            <TicketNum num={5}></TicketNum>
            <TicketNum num={5}></TicketNum>
            <TicketNum num={5}></TicketNum>
            <TicketNum num={5}></TicketNum>
        </div>
    )
}