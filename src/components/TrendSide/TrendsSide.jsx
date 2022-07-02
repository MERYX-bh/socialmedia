import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import TrendsCard from '../TrendsCard/TrendsCard'
import './TrendsSide.css'

const TrendsSide = () => {
  return (
    <div className="TrendsSide">
      <SearchBar/>
      <TrendsCard/>
      <button>Share</button>
   </div>
  )
}

export default TrendsSide