import Link from 'next/link'
import React from 'react'
import { ModeToggle } from '@/components/ModeToggle'
import MainNavLinks from './MainNavLinks'
import { getServerSession } from 'next-auth'
import options from '@/app/api/auth/[...nextauth]/options'

const MainNav = async () => {
  const session = await getServerSession(options)

  return (
    <div className='flex justify-between'>
        <MainNavLinks/>
        <div className='flex items-center gap-2'>
            { session ? (
            <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
            ) : (
            <Link href="/">Login</Link> 
            )}
            
            <div className='px-4'>
                <ModeToggle/>
            </div>
            
        </div>
    </div>
  )
}

export default MainNav