import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import{BsGithub} from 'react-icons/bs'
import{SiDiscord} from 'react-icons/si'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://lkdin.io/40Zh" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Kilnid" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
        <a href="http://discord.com" target="_blank" rel="noopener noreferrer"><SiDiscord/></a>
    </div>
  )
}

export default HeaderSocials