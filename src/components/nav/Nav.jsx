import React, {useState} from 'react'
import './nav.css'
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineProfile} from "react-icons/ai"
import {BiBookAlt} from "react-icons/bi"
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineContacts} from 'react-icons/ai'



const nav = () => {
  const [activeNav, setActiveNav] = NavModification()
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineProfile/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} ><BiBookAlt/></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineContacts/></a>
    </nav>
  )
}

function NavModification(){
  const [activeNav, setActiveNav] = useState('#')
  return(
    [activeNav, setActiveNav]
  )
}

export default nav