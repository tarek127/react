import React from 'react'
import image1 from '../img/chef.jpg';
import image2 from '../img/img-06.jpg';
const Story = () => {
  return (
    <div>
      <div className="discover">
        <div className="container">
            <div className="col-md-6">
                <div className="when">
                    <h2>Our Story</h2>
                    <p>For many years we served delicious food to our customers and we hope to see you here and taste our great dishes. Our restaurant changed the way people see food for the last twenty six years and we hope you will discover our traditions and culinary choices already tested by the best reviewers in the world. Our mission is to provide the best dining experience for all our customers depending on their varied tastes. Eat smart and stay healthy with our food.</p>
                    </div>
                </div>
            <div className="col-md-6">
            <img className="abou" src={image1} alt="nice"/>
            </div>
        </div>
        </div>
=        <div className="since">
            <div className="container">
            <div className="col-md-6">
                <div className="sinc">
                <img className="in" src={image2} alt="nice"/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="ser">
                <h1>Since 1975</h1>
                <h3>"There is no sincerer love<br/> than the love of food"</h3>
                <h4>Trek Medhat</h4>
                <p>For many years we served delicious food to our customers and we hope to see you here and taste our great dishes. Our restaurant changed the way people see food for the last twenty six years and we hope you will discover our traditions and culinary choices already tested by the best reviewers in the world. Our mission is to provide the best dining experience for all our customers depending on their varied tastes. Eat smart and stay healthy with our food.</p>
                <p></p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
export default Story
