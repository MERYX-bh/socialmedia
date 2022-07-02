import React, {useState} from 'react'
import './YourInfo.css';
import {UilPen} from '@iconscout/react-unicons';

const YourInfo = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="yourInfo">
      <div className="InfoHead">
        <b>Your info</b>
        <UilPen
         width="2rem"
         height="1.2rem"
         onClick={() => setModalOpened(true)}
        />
        </div>
        <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>in Relationship</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Multan</span>
      </div>

      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Zainkeepscode inst</span>
      </div>

      <button className="button logout-button">Logout</button>
      </div>
  )
}

export default YourInfo