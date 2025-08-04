import TicketNum from "./TicketNum";
import "./Ticket.css"

export default function Ticket({ticketArr}){
    return(
        <div className="Ticket">
            {
                ticketArr.map((val,idx)=>(
                    <TicketNum num={val} key={idx}/>
                ))
            }
        </div>
    )
}