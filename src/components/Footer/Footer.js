import React from 'react'
import {FaInstagram,FaLinkedin}from "react-icons/fa"
import {SiNetlify} from "react-icons/si"
import "../Footer/Footer.css"


const Footer = () => {
  return (
    <div className='footer'>
        <span className='name'>
        Developed by 
        <a href='https://www.linkedin.com/in/santhosh-kumar-83b76612a/' target="_blank"> Santhosh Kumar ❤️️</a>
        </span>
        <hr style={{width:"90%"}}/>
        <div className='iconContainer'>
        <a href='https://www.instagram.com/santhosh__18__/' target="_blank">
        <FaInstagram size={30}/>
        </a>
        <a href='https://www.linkedin.com/in/santhosh-kumar-83b76612a/' target="_blank">
        <FaLinkedin size={30}/>
        </a>  
        </div> 

    </div>
  )
}

export default Footer