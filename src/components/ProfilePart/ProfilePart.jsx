import React from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'
import FollowersCard from '../FollowersCard/FollowersCard'

const ProfilePart = () => {
  return (
    <div className='ProfilePart'>
        <ProfileCard/>
        <FollowersCard/>
        </div>
  )
}

export default ProfilePart