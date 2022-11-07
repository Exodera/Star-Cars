import React from 'react'
import './Background.css'
import Car1 from '../../assets/car1.jpg'

const Background = () => {
  return (
    <div className='backgrounds'>
        <ul>
            <li><img src={Car1} alt= "Sports car"/></li>
            <li><img src={Car1} alt= "Sports car"/></li>
            <li><img src={Car1} alt= "Sports car"/></li>
        </ul>
  </div>
  )
}

export default Background