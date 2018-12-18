import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class NavBar  extends Component {
    state = {  };

    render() {
        return (
                <div className="fhs">
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
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    </div>
                </div>
                </nav>
                <div class="head">
                    <div class="overlay">
                            <div class="container">
                                <h1>Welcome</h1>
                                <h2>the Roots</h2>
                                <p>Discover The New Way To Food</p>
                                <button>Reservations</button>
                            </div>
                    </div>
                </div> 
                </div>
        );
    }
}

export default NavBar;