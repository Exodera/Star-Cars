import {React, useState} from 'react'
import {Link} from 'react-router-dom'
import SideMenu from '../SideMenu/SideMenu';
import './Header.css'

const Header = () => {
const [menuItemsOpen, setMenuItemsOpen] = useState(false);

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
            <Link to = '/' className='menu' onClick={()=>{
              setMenuItemsOpen((prev)=> !prev)
              console.log(menuItemsOpen)
            }}>Menu</Link>
          </div>
        </div>
          <SideMenu menuItemsOpen={menuItemsOpen} setMenuItemsOpen={setMenuItemsOpen} />

    </div>
    
  )
}

export default Header