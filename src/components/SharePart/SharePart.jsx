import React, { useState, useRef } from "react";
import MyProfilePic from '../../img/profile.jpg'
import './SharePart.css'
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

// WHAT I LEARNED HERE
// event.target.file : to store the files
// setImage({
//   image: URL.createObjectURL(img),
// }) => to initalize the element : image.image


const SharePart =
 () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <div className="SharePart">
        <img src={MyProfilePic} />
        <div>
         <input type="text" placeholder="Hey What's happening" />
         <div className="shareOpts">
         <div className="option"
          onClick={()=>imageRef.current.click()}
          >
            <UilScenery/>
            Photo
            </div>
            <div className="option" >
            <UilPlayCircle />
            Video
          </div>{" "}
          <div className="option">
            <UilLocationPoint />
            Location
          </div>{" "}
          <div className="option">
            <UilSchedule />
            Shedule
          </div>
          <button className="button-share">Share</button>
          <div style={{ display: "none" }}>
          <input 
          type="file" 
          name="image" 
          ref={imageRef}
          onClick={onImageChange}
          />
          </div>
         </div>

         {image && (
          
          <div className="previewImage">
          <UilTimes onClick={()=>setImage(null)}/>
          {/* setImage(null) : un boutton pour supprimer l'image */}
          <img src={image.image} alt="" />
          </div>
         )}

        </div>

    </div>
  )
}

export default SharePart