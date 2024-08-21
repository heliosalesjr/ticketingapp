import prisma from "@/prisma/db";
import DataTable from "./DataTable";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Pagination from "@/components/Pagination";

interface SearchParams {
 
  page: string;
  
}

const Tickets = async () => {
    const tickets = await prisma.ticket.findMany();

   
    
  return (
    <>
      <Link href="/tickets/new"
        className={buttonVariants({ variant: "default"})}>
          New Ticket
      </Link>
      <div><DataTable tickets={tickets}/></div>
      <Pagination itemCount={tickets.length} pageSize={10} currentPage={1}/>
    </>
    
  )
}

export default Tickets