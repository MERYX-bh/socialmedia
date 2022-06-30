import React from 'react'
import ProfilePart from '../../components/ProfilePart/ProfilePart'
import SearchBar from '../../components/SearchBar/SearchBar'
import TrendsSide from '../../components/TrendSide/TrendsSide'
import './Home.css'

const Home = () => {
  return (
        <div className="Home">
        <TrendsSide/>
        <SearchBar/>
        <ProfilePart/>
        </div>
  )
}

export default Home