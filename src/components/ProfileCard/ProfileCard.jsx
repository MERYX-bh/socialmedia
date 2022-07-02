import React from 'react'
import profilpic from '../../img/profile.jpg'
import coverPic from '../../img/cover.jpg'
import './ProfileCard.css'

const ProfileCard = () => {
    const ProfilePage = true;
  return (
    <div className='ProfileCard'>
        <div className="ProfileImgs">
            <img src={coverPic} />
            <img src={profilpic} />
        </div>
        <div className="ProfileInfo">
            <span className='name'>Meriem Baha</span>
            <span>Frontend web developer</span>
        </div>
        <div className="followersStatus">
        <hr/>
        <div>
        <div className="follow">
            <span>1690</span>
            <span>Followers</span>
        </div>
        <div className="follow">
            <span>1690</span>
            <span>Followers</span>
        </div>
        {
            ProfilePage && (
                <>
                <div className="follow">
                <span>4</span>
                 <span>posts</span>
                </div>
                </>
            )
        }
        </div>
        <hr/>
        </div>
        <button className='buttonMyProfile'>My profile</button>
    </div>
  )
}

export default ProfileCard