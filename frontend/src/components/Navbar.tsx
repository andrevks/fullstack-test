import React from 'react';
import ReactLogo from '../assets/ReactLogo.svg'

export function Navbar() {
  return (
        <div className='flex justify-center items-center bg-white w-full rounded-sm min-h-[3rem] mb-20'>
            <img src={ReactLogo} alt="React Logo" width="40rem" className='mr-1'/>
            <p className="font-semibold">INVENTORY</p>
      </div>
    
  )
}