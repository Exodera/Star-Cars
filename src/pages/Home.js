import React from 'react'
import './styles/Home.css'
import './styles/Global.css'
//import Vroom from '../assets/bmwvroom.jpg'



const Home = (props) => {
  
  return (
    <div className='home' >
      
      <div className='showcase'>

        <div className='case'>
          <div className='case-text'>
            <h2>Model X</h2>
            <p>Schedule a Test Drive</p>
          </div>
        

          <div className='buttons'>
            <button className='action-btn'>Custom order</button>
            <button className='action-btn'>Stock Availabilty</button>
          </div>

        </div>

      </div>
     


      
      
      
    </div>
  )
}

export default Home