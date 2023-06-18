import React from 'react'
import Title from '../components/Title/Title'
import classes from './About.module.css'
import img from '../assests/krushna.jpeg'

const About = () => {
  return (
    <div>
      <Title />
      <div className={classes.about}>
        <h1>ABOUT</h1>
        <div className={classes.main}>
          <img src={img} alt='img' />
          <p>
          An ecommerce website has a catalog that showcases the products or services available for purchase. Each product listing includes details such as descriptions, images, pricing, and specifications.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About