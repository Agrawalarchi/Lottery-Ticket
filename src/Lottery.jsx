import Ticket from "./Ticket";
import "./Lottery.css"
import { useState } from "react";
import { genTicket } from "./helper";
import Button from "./Button";
import { conditions } from "./Condition.js";

export default function Lottery({ n = 4 }) {
  const [ticketArr, setTicketArr] = useState(genTicket(n));
  const [selectedCondition, setSelectedCondition] = useState('sum19');

 
  const winCondition = conditions[selectedCondition].fn;

  
  const isWinner = winCondition(ticketArr);

  const buyTicket = () => {
    setTicketArr(genTicket(n));
  };

  const handleChange = (e) => {
    setSelectedCondition(e.target.value);
  };

  // Create options for select dropdown
  const condOptions = Object.entries(conditions).map(([key, condition]) => (
    <option key={key} value={key}>{condition.label}</option>
  ));

  return (
    <div className="Lottery">
      <div className="subWrapper">
        <Ticket ticketArr={ticketArr} />
        <select value={selectedCondition} onChange={handleChange}>
          {condOptions}
        </select>
      </div>
      <br />
      <Button action={buyTicket} />
      {isWinner && <h3>Congratulations! You win.</h3>}
    </div>
  );
}
