import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portFolio1.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mes derniers projets</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/>
          </div>
            <h3>React Portfolio - 2023</h3>
            <div className="portfolio__item-cta">
              <a href="http://github.com" target="_blank" className='btn'>Github</a>
            <a href="https://dribbble.com/" target="_blank" className='btn btn-primary'>Dribble</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/>
          </div>
            <h3>Sympfony Work - 2023</h3>
            <div className="portfolio__item-cta">
              <a href="http://github.com" target="_blank" className='btn'>Github</a>
            <a href="https://dribbble.com/" target="_blank" className='btn btn-primary'>Dribble</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/>
          </div>
            <h3>JS QRCode - 2022</h3>
            <div className="portfolio__item-cta">
              
            </div>
        </article>
        
       
      </div>
    </section>
  )
}

export default portfolio