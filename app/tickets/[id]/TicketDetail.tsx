import React from 'react'
import { Ticket } from '@prisma/client'

interface Props {
    ticket: Ticket;
    
  }
const TicketDetail = ( {ticket}: Props) => {
   return (
    <div>
        <p>{ticket.title}</p>
        <p>{ticket.description}</p>
    </div>
   )
};


export default TicketDetail