import React from 'react'

const FeatutreBox = (props) => {
  return (
    <div className='a-box'>
        <div className="a-b-img">
            <img src={props.image} alt="image" />
        </div>
        <div className="a-b-text">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default FeatutreBox