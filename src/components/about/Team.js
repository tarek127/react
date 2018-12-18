import React from 'react'
import image1 from '../img/team-massimo.jpg';
import image2 from '../img/team-rachel.jpg';
import image3 from '../img/team-fernando.jpg';
import image4 from '../img/chef-john-lawson-mr-hive-kitchen-and-bar-melbourne.jpg';

const Team = () => {
  return (
    <div>
        <div className="we">
            <div className="container">
            <div className="col-md-12">
                <h1>The Team</h1>
            </div>
            </div>
        </div>
        <div className="team">
            <div className="col-md-6">
                <div className="title">
                <h3>Meet the Team</h3>
                <h1>Our talents and experience are diverse, but at Osteria we’re united by one thing: an over arching passion for Italian food, wine and hospitality.</h1>
                    <p>We believe that no dish can be better than its ingredients, and that the best ingredients are usually local.  Every day we make many decisions about what we eat and every one of our food choices has an ethical and environmental impact.  It is the best of coincidences that good food choices – those that are good for our land and people, for the environment, for the body and mind – are also delicious and enjoyable.</p>
                    <p>Every day we make many decisions about what we eat and every one of our food choices has an ethical and environmental impact.  It is the best of coincidences that good food choices. Hugely passionate about the industry, his breadth of knowledge and desire to exceed guest expectations is at the forefront of his approach to wine service.</p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="chef">
                <h3>Chef</h3>
                <img className="che" src={image1} alt="chef"/>
                <h4>Trek Medhat</h4>
                <h5>Executive Chef</h5>
                <p>Hugely passionate about the industry, his breadth of knowledge<br/> and desire to exceed guest expectations is at the forefront of his<br/> approach to wine service.</p>
                </div>
            </div>
            </div>
        <div className="chefsd">
            <div className="col-md-4">
                <div className="chefs1">
                <img src={image2} alt="chef1"/>
                <h4>Trek Medhat</h4>
                <h5>Executive Chef</h5>
                <p>Hugely passionate about the industry, his breadth of knowledge and desire to exceed guest expectations .</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="chefs1">
                    <img src={image3} alt="chef1"/>
                    <h4>Trek Medhat</h4>
                    <h5>Executive Chef</h5>
                    <p>Hugely passionate about the industry, his breadth of knowledge and desire to exceed guest expectations .</p>
                </div>
                </div>
                <div className="col-md-4">
                    <div className="chefs1">
                        <img className="john" src={image4} alt="chef1"/>                
                    <h4>Trek Medhat</h4>
                    <h5>Executive Chef</h5>
                    <p>Hugely passionate about the industry, his breadth of knowledge and desire to exceed guest expectations .</p>
                    </div>
                </div>
            </div>
            <div className="cler-fix"></div>
        </div>
  )
}
export default Team
