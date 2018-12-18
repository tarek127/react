import React from 'react'
import './About.css'
import NavAbout from './NavAbout';
import Story from './Story'
import Team from './Team';
import Footer from '../footer/Footer';
const About = () => {
  return (
    <div>
      <NavAbout/>
      <Story/>
      <Team/>
      <Footer/>
    </div>
  )
}
export default About;