import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
class NavAbout  extends Component {
    render() {
        return (
                <div className="fh">
                <nav className="navbar navbar-default navbar-fixed-top chang-nav">
                <div className="container">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="/">Brand</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink  to="/about">About</NavLink></li>
                        <li><NavLink to="/menu">Menu</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    </div>
                </div>
                </nav>
                <div class="header">
                    <div class="overlay">
                    <div class="container">
                        <h1>About Us</h1>
                    </div>
                    </div>
                </div>    
                </div>
        );
    }
}

export default NavAbout;