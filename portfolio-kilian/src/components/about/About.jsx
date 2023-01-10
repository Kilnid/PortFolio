import React from 'react'
import './about.css'
import ME from '../../assets/2022_KilianIDE.jpg'
import { GiAchievement } from 'react-icons/gi'
import { FaUsers } from 'react-icons/fa'
import { GiFullFolder } from 'react-icons/gi'

const About = () => {
  return (
    <section id="about">
      <h5>Faire connaissance</h5>
      <h2>À propos de moi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="img about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiAchievement className="about__icons" />
              <h5>Experience</h5>
              <small>moins de 1 ans</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icons" />
              <h5>Emploie</h5>
              <small>en recherche de formation</small>
            </article>
            <article className="about__card">
              <GiFullFolder className="about__icons" />
              <h5>Projet</h5>
              <small>5 projets réalisés</small>
            </article>
          </div>
          <p>Salut !
            Moi c'est Kilian et je suis developpeur diplômé de l'Institut Universitaire de Technologie de
            Reims-Châlons-Charleville. Je suis aujourd'hui toujours en recherche de formation de Concepteur
            Fullstack, je travaille notamment avec C# .NET , PHP et Node JS. Toujours passionné par la science
            numérique et les nouvelles Technologie, j'ai hâte de travailler sur des projets techniquement
            enrichissants et humain afin de continuer à développer mes compétences et mes connaissances.</p>
          <a href="#contact" className='btn btn-primary' rel="noopener noreferrer">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About