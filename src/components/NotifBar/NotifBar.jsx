import './NotifBar.css';
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import settings from "../../img/settings.png";
import { UilSetting } from "@iconscout/react-unicons";
import React from 'react'

const NotifBar = () => {
  return (
    <div className="NotifBar">
        <img src={Home} alt="" />
        <img src={settings} alt="" />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
    </div>
  )
}

export default NotifBar