import React from 'react'
import './about.css'
import ME from '../../assets/me3.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {PiProjectorScreenChart} from 'react-icons/pi'
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me"> 
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
        </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2 Years Experience</small>
              </article>

              <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>NA</small>
              </article>

              <article className="about__card">
              <PiProjectorScreenChart  className='about__icon'/>
              <h5>Projects</h5>
              <small>NA</small>
              </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis provident molestias illum 
            placeat similique modi delectus laborum illo animi reiciendis odit natus 
            consequuntur sit porro exercitationem repellat, excepturi sint laboriosam.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
      
    </section>
  )
}

export default About