import React from 'react';
import PostsSide from '../../components/PostsSide/PostsSide';
import ProfileLeftSide from '../../components/ProfileLeftSide/ProfileLeftSide';
import ProfileMiddle from '../../components/ProfileMiddle/ProfileMiddle';
import ProfileRightS from '../../components/ProfileRightside/ProfileRightS';
import './Profile.css';

const Profile = () => {
  return (
    <div className="ProfilePage">
        <ProfileLeftSide/>
        <div className="Profile-center">
        <ProfileMiddle/>
        <PostsSide/>
        </div>
        <ProfileRightS/>
    </div>
  )
}

export default Profile