import React from 'react'
import './footer.css'
import{BsLinkedin} from 'react-icons/bs'
import{BsGithub} from 'react-icons/bs'
import{SiDiscord} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="#" target="_blank" className='footer__logo'>Kilian</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">A propos</a></li>
        <li><a href="#experience">Outils</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        
       
      </ul>
      <div className="footer__socials">
           <a href="https://lkdin.io/40Zh" target="_blank" ><BsLinkedin/></a>
        <a href="https://github.com/Kilnid" target="_blank" ><BsGithub/></a>
        <a href="http://discord.com" target="_blank" ><SiDiscord/></a>
        </div>
        <div className="footer__copyright">
          <small>&copy; Kilian PortFolio. All right reserved</small>
        </div>
    </footer>
  )
}

export default Footer