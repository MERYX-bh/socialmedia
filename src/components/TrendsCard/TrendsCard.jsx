import React from 'react'
import "./TrendsCard.css"
import {TrendData} from '../../Data/TrendData.js'

const TrendsCard = () => {
  return (
    <div className="TrendsCard">
        <h3>Trends for you </h3>
        {
            TrendData.map((trend)=>{
                return(
                    <div className='trend'>
                        <span><b>#{trend.name}</b></span>
                        <span>
                            {trend.shares}k shares
                        </span>
                    </div>
                )
            })
        }
    </div>
  )
}

export default TrendsCard