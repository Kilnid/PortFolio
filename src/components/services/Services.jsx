import React from 'react'
import './services.css'
import { BsCheckLg } from 'react-icons/bs'

const Services = () => {
  return (
    <section id="services">
      <h5>Mes capacités</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Développement Logiciel</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>C# .net</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Python</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>PHP</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Node JS</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Développement Web</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Symfony</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>PHP</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Node JS</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>C# .net core</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Développement mobile</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>C# .net core</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Python</p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services