import React from 'react'
import {Link} from 'react-router-dom';
import './Home.css';
import theimage from '../img/d6eab2e4180a5c9f5ca3fdeeec82cf72.jpg';
 const Header =() => {
  return (
      <div>
    <div className="welcome">
        <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="welco">
                    <h1>Discover</h1>
                    <h2>Our Story</h2>
                    <h3>*</h3>
                    <p>A place of enjoyment and relaxation at one of the most enchanting places of the city, in the middle of the central city park. Enjoy modern Italian cuisine at the highest level. The quality lies in the composition of best products.</p>
                    <p><Link to="/about">ABOUT US</Link></p>
                </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                <img className="welc" src={theimage} alt="nice"/>
                </div>
            </div>
        <div className="delicios">
        <div className="container">
            <div className="delic">
                <h1>Tasteful</h1>
                <h3>Recipes</h3>
            </div>
        </div>
    </div> 
    </div>
  );
}
export default Header;
