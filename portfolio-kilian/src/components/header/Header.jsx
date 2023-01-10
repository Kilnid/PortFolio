import React from 'react'
import './header.css'
import CTA from './CTA'
import picture1 from '../../assets/headpicture1_transparent.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
          <h5>Salut ! </h5>
          <h1>Kilian IDÉ</h1>
          <h5 className="text-light">Fullstack Developpeur</h5>
          <CTA/>
          <HeaderSocials/>
          <div className="me">
            <img src={picture1} alt="me" />
          </div>
          <a href="#contact" className="scroll__down">Descendre</a>
        </div>
    </header>
  )
}

export default Header