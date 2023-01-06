import React from 'react'
import FeaturedWork from './FeaturedWork'
import './FeaturedWorks.css'

import workData from '../works.json'

// PROPS STATE
const FeaturedWorks = () => {
  return (
    <div className='featured-works-section'>
        {
            workData.map(work =>(
                <FeaturedWork basliq={work.layihemizin_adi} tarix={work.tarix} movzu={work.movzu} shekil={work.imgLink}/>
            ))
        }
    </div>
  )
}

export default FeaturedWorks