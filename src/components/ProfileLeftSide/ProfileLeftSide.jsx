import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import ProfileCard from '../ProfileCard/ProfileCard'
import SearchBar from '../SearchBar/SearchBar'
import TrendsSide from '../TrendSide/TrendsSide'
import YourInfo from '../YourInfo/YourInfo'
import './ProfileLeftSide.css'

const ProfileLeftSide = () => {
  return (
    <div className="ProfileLeftSide">
        <SearchBar/>
        <YourInfo/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileLeftSide