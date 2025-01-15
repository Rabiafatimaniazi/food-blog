import React from 'react'
import Link from 'next/link'

export default function Header() {
  return ( 
    <div className='flex flex-col md:flex-row justify-between items-center bg-emerald-950 p-4'>
      <div className='text-white font-bold text-3xl md:text-5xl text-center md:text-left p-2'>
        SPICE OF PAKISTAN
      </div>
      <div className='text-white text-base md:text-lg p-2'>
        <Link href={"/"}>BLOG</Link>
      </div>
    </div>
  )
}
