import React from 'react'
import NotifBar from '../NotifBar/NotifBar';
import TrendsCard from '../TrendsCard/TrendsCard';
import './ProfileRightS.css'

const ProfileRightS = () => {
  return (
    <div className="ProfileRight">
        <NotifBar/>
        <TrendsCard/>
        <button>Share</button>
    </div>
  )
}

export default ProfileRightS