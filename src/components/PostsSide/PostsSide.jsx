import React from 'react'
import Posts from '../Posts/Posts.jsx'
import SearchBar from '../SearchBar/SearchBar.jsx'
import SharePart from '../SharePart/SharePart.jsx'
import './PostsSide.css'

const PostsSide = () => {
  return (
    <div className='PostsSide'>
        <SharePart/>
        <Posts/>
    </div>
  )
}

export default PostsSide