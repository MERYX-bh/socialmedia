import React, { useState } from 'react'
import NotifBar from '../NotifBar/NotifBar';
import TrendsCard from '../TrendsCard/TrendsCard';
import './ProfileRightS.css'
import ShareModal from '../ShareModal/ShareModal';


const ProfileRightS = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="ProfileRight">
        <NotifBar/>
        <TrendsCard/>
        <button onClick={() => setModalOpened(true)}>Share</button>
        <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  )
}

export default ProfileRightS