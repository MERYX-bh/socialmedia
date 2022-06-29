import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import './Home.css'

const Home = () => {
  return (
        <div className="Home">
        <SearchBar/>
        <div className="profile"></div>
        <div className="leftside"></div>
        </div>
  )
}

export default Home