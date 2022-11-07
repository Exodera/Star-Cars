import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='navbar'>
      <h1>LOGO</h1>
      <div className='nav-links first'>
        <Link to = '/'>Model S</Link>
        <Link to = '/'>Model 3</Link>
        <Link to = '/'>Model X</Link>
        <Link to = '/'>Model Y</Link>
        <Link to = '/'>Solar Roof</Link>
        <Link to = '/'>Solar Panels</Link>
      </div>

      <div className='nav-links last'>
        <Link to = '/' className='shop'>Shop</Link>
        <Link to = '/' className='account'>Account</Link>
        <Link to = '/' className='menu'>Menu</Link>
      </div>

    </div>

    </div>
    
  )
}

export default Header