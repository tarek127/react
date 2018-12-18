import React from 'react'
import theImage from '../img/SS_July2017_IYN4___Super_Portrait.jpg';
import image from '../img/menu-thumb-1-300x218.jpg';
import image1 from '../img/food-17.jpg';
import image2 from '../img/menu-thumb-6-300x218.jpg';
import {Link} from 'react-router-dom';
const Menu = () => {
  return (
    <div>
      <div className="menu">
      <div className="col-md-6 col-sm-12 col-xs-12">
          <div className="foo">                          
        <div className="col-md-6 col-xs-6 col-sm-6">
        <div className="food">
          <img  src={image1} alt="nice"/>
        </div>
      </div>
      <div className="col-md-6 col-xs-6 col-sm-6 col-xs-12">      
            <img src={theImage} alt="nice"/>
        </div>
        <div className="col-md-6 col-xs-6 col-sm-6 col-xs-12">
            <div className="food">
              <img className="spe" src={image} alt="nice"/>
            </div>
          </div>
          <div className="col-md-6 col-xs-6 col-sm-6 col-xs-12">
                <img className="spe" src={image2} alt="nice"/>
            </div>
            </div>
        </div>
      <div className="col-md-6 col-sm-12 col-xs-12">
          <div className="discover">
            <h1>Discover</h1>
            <h2>Menu</h2>
            <h3>*</h3>
            <p>A place of enjoyment and relaxation at one of the most enchanting places of the city, in the middle of the central city park. Enjoy modern Italian cuisine at the highest level. The quality lies in the composition of best products.</p>
            <p><Link to="/menu">View The Full Menu</Link></p>
          </div>
        </div>
      </div>      
    <div className="delicio">
        <div className="container">
            <div className="deli">
                <h1>The perfect</h1>
                <h3>Blend</h3>
         </div>
             </div>
        </div>
    </div>    
  )
}
export default Menu;
