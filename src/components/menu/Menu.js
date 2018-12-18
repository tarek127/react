import React from 'react'
import './Menu.css';
import NavMenu from './NavMenu';
import Starts from './Starts';
import Lunch from './Lunch';
import Diner from './Diner';
import BreakFast from './breakFast';
import Footer from '../footer/Footer';
export default () => {
  return (
    <div>
      <NavMenu/>
      <Starts/>
      <Lunch/>
      <Diner/>
      <BreakFast/>
      <Footer/>
    </div>
  )
}
