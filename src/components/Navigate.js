import React from 'react'
import logo from "../images/news.png"
import "../components/Navigate.css"
import HamburDrawer from './HamburDrawer'

const Navigate = ({setCategory}) => {
  return (
    <div className='nav'>
    <div className='icon'><HamburDrawer setCategory={setCategory}/></div>
    <img src={logo} className="news-image" alt='logo' style={{cursor:"pointer"}}/>
    </div>
    
  )
}

export default Navigate