import React from 'react'
import {Link} from 'react-router-dom';
import theImage from '../img/f351f471-b470-414a-991f-20a0e7f7ad17--2017-0518_better-than-restaurant-home-fries_julia-gartland-25430_1-.jpg';
 const Delight =() => {
  return (
    <div>
        <div class="special">
            <div class="col-md-6 col-sm-12">
            <div class="spec">
                <h1>Culinary</h1>
                <h2>Delight</h2>
                <h3>*</h3>
            <p> We promise an intimate and relaxed dining experience that offers something different to local and foreign patrons and ensures you enjoy a memorable food experience every time.</p>
                <p><Link to="/menu">Make a Reservation</Link></p>
            </div>
            </div>
            <div class="col-md-6 col-sm-12">
            <img class="spe" src={theImage} alt="nice"/>
            </div>
            </div>
            <div class="functi">
            <div class="container">
                <div class="funct">
                    <h1>special</h1>
                    <h3>Functions</h3>
                </div>
            </div>
            </div>
    </div>
  )
}
export default Delight;
