import Link from 'next/link'
import React from 'react'
import { ModeToggle } from '@/components/ModeToggle'
import MainNavLinks from './MainNavLinks'

const MainNav = () => {
  return (
    <div className='flex justify-between'>
        <MainNavLinks/>
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