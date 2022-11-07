import React from 'react'
import './styles/Home.css'
import './styles/Global.css'
import Car1 from '../assets/car1.jpg'

const Home = () => {
  return (
    <div className='home'>
        <div className='backgrounds'>
        <img src={Car1} alt= "Sports car"/>

        </div>
        
    </div>
  )
}

export default Home