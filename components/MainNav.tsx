import Link from 'next/link'
import React from 'react'
import {ModeToggle} from '@/components/ModeToggle'

const MainNav = () => {
  return (
    <div className='flex justify-between'>
        <div className='flex items-center gap-2'>
            <Link href="/">Dash</Link>
            <Link href="/tickets">Tickets</Link>
            <Link href="/users">Users</Link>
        </div>
        <div className='flex items-center gap-2'>
            <Link href="/">Logout</Link>
            <div className='px-4'>
                <ModeToggle/>
            </div>
            
        </div>
    </div>
  )
}

export default MainNav