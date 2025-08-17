import React from 'react'
import Border from './Border'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-8 py-4 z-[100] w-full h-20 fixed'>
        <h1 className='text-white text-xl font-bold cursor-pointer be-vietnam-pro'>Exyz</h1>
        <h2 className='text-white pr-4 leading-6 tracking-widest be-vietnam-pro'>Leaderboard</h2>
        <Border data="CONNECT WALLET"/>
    </div>
  )
}

export default Navbar
