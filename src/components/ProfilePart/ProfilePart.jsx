import React from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'
import FollowersCard from '../FollowersCard/FollowersCard'
import NotifBar from '../NotifBar/NotifBar'

const ProfilePart = () => {
  return (
    <div className='ProfilePart'>
        <NotifBar/>
        <ProfileCard/>
        <FollowersCard/>
        </div>
  )
}

export default ProfilePart