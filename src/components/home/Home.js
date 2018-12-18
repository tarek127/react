import React from 'react'
import NavBar from '../NavBar';
import Headers from './header';
import Menu from './Menu';
import Delight from './Delight';
import Events from './Events'
import Footer from '../footer/Footer';
import './Home.css';
const Home = () => {
  return (
    <div>
      <NavBar/>
      <Headers/>
      <Menu/>
      <Delight/>
      <Events/>
      <Footer/>
    </div>
  )
}
export default Home;
