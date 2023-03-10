import React from 'react'
import './experience.css'
import { BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Quelles sont mes compétences</h5>
      <h2>Mes outils</h2>
      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>Frontend Developpement</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Confirmé</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
            <article className='experience__details'> 
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScrip</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
            <article className='experience__details'> 
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Developpement</h3>
          <div className="experience__content">
            <article className='experience__details'>  
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Confirmé</small>
              </div>
            </article>
            <article className='experience__details'> 
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Symfony</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
            
            <article className='experience__details'> 
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>C# .net</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
            
          </div>
        </div>
        <div className="experience__bd">
          <h3>Base de données</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>PHPMYAdmin</h4>
                <small className='text-light'>Confirmé</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
           
          </div>
        </div>
        <div className="experience__tools">
          <h3>Outils</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Git</h4>
                <small className='text-light'>Confirmé</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>GitHub</h4>
                <small className='text-light'>Confirmé</small>
              </div>
            </article>
            <article className='experience__details'> 
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>VS Code</h4>
                <small className='text-light'>Confirmé</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Microsoft Visual Studio</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
            <article className='experience__details'> 
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>PHP Storm</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
            <article className='experience__details'> 
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Figma</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience 