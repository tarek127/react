import React from 'react'
import {Link} from 'react-router-dom';
import theImage from '../img/cake-2295608_960_720.jpg';
 const Events = () => {
  return (
    <div>
      <div className="evint">
      <div className="col-md-6">
        <div className="tedals">
          <img className="tedal" src={theImage} alt="nice"/>
        </div>
      </div>
      <div className="col-md-6 col-sm-12">
          <div className="even">
            <h1>Discover</h1>
            <h2>Private events</h2>
            <h3>*</h3>
            <p>A place of enjoyment and relaxation at one of the most enchanting places of the city, in the middle of the central city park. Enjoy modern Italian cuisine at the highest level. The quality lies in the composition of best products.</p>
            <p><Link to="/contact">View The Full Menu</Link></p>
          </div>
        </div>
      </div>   
      <div className="cler-fix"></div>   
    </div>
  )
}
export default Events;
