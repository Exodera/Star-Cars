import React from 'react'
import './SideMenu.css'
import {Link} from 'react-router-dom'
import {GrClose} from 'react-icons/gr'


const SideMenu = (props) => {
  return (
    <div className={props.menuItemsOpen?'menu-items-open':'menu-items-close'}>
        <button onClick={()=>{
            props.setMenuItemsOpen((prev)=>!prev)
        }}><GrClose size={'1.2rem'}/></button>
        <div className='links'>
            <Link to = '/'>Existing Inventory</Link>
            <Link to = '/'>Model S</Link>
            <Link to = '/'>Model S</Link>
            <Link to = '/'>Model S</Link>
            <Link to = '/'>Model S</Link>
        </div>
        
    </div>
  )
}

export default SideMenu