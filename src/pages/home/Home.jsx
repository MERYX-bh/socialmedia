import React from 'react'
import PostsSide from '../../components/PostsSide/PostsSide'
import ProfilePart from '../../components/ProfilePart/ProfilePart'
import SearchBar from '../../components/SearchBar/SearchBar'
import TrendsSide from '../../components/TrendSide/TrendsSide'
import './Home.css'

const Home = () => {
  return (
        <div className="Home">
        <TrendsSide/>
        <PostsSide/>
        <ProfilePart/>
        </div>
  )
}

export default Home