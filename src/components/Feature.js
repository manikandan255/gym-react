import React from 'react'
import FeatutreBox from './FeatutreBox'
import fimage1 from '../images/1.svg'
import fimage2 from '../images/2.svg'
import fimage3 from '../images/3.svg'
import fimage4 from '../images/4.svg'

const Feature = () => {
  return (
    <div className='features'>
        <h1>FEATURES</h1>
        <div className="a-container">
            <FeatutreBox image={fimage1} title="Weight Lifting" text="Where dedication meets iron. progression through weightlifting.."/>
            <FeatutreBox image={fimage2} title="Specific Muscle" text="Sweat, smile, repeat - the gym is where strength becomes a habit."/>
            <FeatutreBox image={fimage3} title="Flex Your Muscle" text="Thumble your way to strength, one pinch at a time."/>
            <FeatutreBox image={fimage4} title="Cardio Exercise" text="Embrace the rhythm of cardio, as your heart leads you to vitality."/>
        </div>
    </div>
  )
}

export default Feature