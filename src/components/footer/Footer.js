import React from 'react'

 const Footer =() => {
  return (
    <div>
      <div className="foter">
    <div className="container">
      <div className="deatils">
      <div className="col-md-4">
        <div className="fote">
          <h1>Good Food</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta veritatis hic possimus ad, quis quae repudiandae aliquam. Veritatis, quibusdam fugiat praesentium beatae repellendus necessitatibus expedita cum dolorum vero laboriosam neque!</p>
          <div className="follow">
              <i className="fab fa-facebook-f" aria-hidden="true"/>
              <i className="fab fa-twitter" aria-hidden="true"/>
              <i className="fab fa-instagram" aria-hidden="true"/>              
              <i className="fab fa-linkedin" aria-hidden="true"/>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="con">
          <h1> Contact info </h1>
          <i className="fas fa-map-marker" aria-hidden="true"/>
          <p>329 Queensberry Street, North Melbourne VIC</p>
          </div>
          <div className="phon">
          
          <i className="fas fa-phone" aria-hidden="true"/>
          <p>+15 890 979 25 25</p> 
        </div>
        <div className="email">
        
            <i className="fas fa-envelope" aria-hidden="true"/>
            <p>mail@massivetheme.com</p>
        </div>
        <div className="subscribe">
          <h2>subscribe</h2>
          <input type="Email" placeholder="Youre Emaile address"/>
          <button>Send</button>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="opening">
          <h1>Opening Hours</h1>
          <div className="col-md-6 col-sm-6 col-xs-12">
          <p>MONDAY-FRIDAY</p>
          <p>7AM-11AM(Breakfast)<br/>11AM-6PM(Lunch)<br/>6PM-10PM(Dineer)</p>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
          <p>STURDAY-SUNDAY</p>
          <p>8AM-1AM(Breakfast)<br/>1PM-6PM(Lunch)<br/>6PM-9PM(Dineer)</p>
        </div>
        <p><a href="/">Make a Reservation</a></p>      
        </div>
      </div>
      </div>
      </div>
      <div className="copy">
      <h1> Copyright © 2018 . All rights reserved </h1>
      </div>
      </div>          
      </div>
  )
}
export default Footer;
