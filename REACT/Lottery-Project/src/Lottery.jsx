import { useState } from "react";
import { generate,sum} from "./helper";
import Ticket from './Ticket'

export default function Lottery({n,winningsum}){
    let [ticket,setTicket] = useState(generate(n));
     let isWinning = sum(ticket)===winningsum;

    function newTicket(){
        setTicket(generate(3));
    }
    return(
        <div>
            <h1>Lottery Game!</h1>
            <div>
              <Ticket ticket={ticket}/>
            </div>
            <button onClick={newTicket}>By New Ticket</button>
            <h3>{isWinning && "Congratulation , you won"}</h3>
        </div>
    )
}