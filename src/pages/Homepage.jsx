import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import grid from '../assets/neon_grid.png'
import NftCollection from '../components/NftCollection'
import LeagueTable from '../components/LeagueTable'
import Footer from '../components/Footer'
import { leagueData } from '../data/leagueData'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="relative w-full overflow-hidden pt-6">
        <div className="absolute top-6 w-full h-3 bg-[#FF8274] shadow-[0_0_20px_8px_rgba(255,100,50,0.8)]">
            <div className='relative top-1 bg-white h-1'></div>
        </div>
        <img src={grid} alt=""/>
      </div>
      <NftCollection/>
      <LeagueTable leagueData={leagueData}/>
      <Footer/>
    </div>
  )
}

export default HomePage
