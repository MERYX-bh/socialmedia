import React from 'react'
import {UilSearch} from '@iconscout/react-unicons'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className='SearchBarContainer'>
     <input type="text" placeholder='Explore' />
     <div className="s-icon">
               <UilSearch/>
           </div>
    </div>
  )
}

export default SearchBar