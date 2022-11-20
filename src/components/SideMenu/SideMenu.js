import React from 'react'
import './SideMenu.css'
import {Link} from 'react-router-dom'
import {GrClose} from 'react-icons/gr'


const SideMenu = (props) => {
 
  return (
    <div className={props.menuItemsOpen?'menu-items-open side-nav':'menu-items-close side-nav'}>
        <button onClick={()=>{
            props.setMenuItemsOpen((prev)=>!prev)
            props.data(props.menuItemsOpen)
        }}><GrClose size={'1.2rem'}/></button>
        <div className='links'>
            <Link to = '/'>Existing Inventory</Link>
            <Link to = '/'>Model X</Link>
            <Link to = '/'>Model Y</Link>
            <Link to = '/'>Model Z</Link>
            <Link to = '/'>Model A</Link>
        </div>
        
    </div>
  )
}

export default SideMenu