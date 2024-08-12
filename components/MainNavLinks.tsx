"use client"

import React from 'react'
import Link from 'next/link'

const MainNavLinks = () => {
  return (
    <div className='flex items-center gap-2'>
        <Link href="/" className='navbar-link'>Dash</Link>
        <Link href="/tickets" className='navbar-link'>Tickets</Link>
        <Link href="/users" className='navbar-link'>Users</Link>
    </div>
  )
}

export default MainNavLinks