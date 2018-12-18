import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About'
import Menu from './components/menu/Menu';
import Contact from './components/contact/Contact'
class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <Route exact path="/" component={Home}/>
          <Route  path="/about" component={About}/>
          <Route  path="/menu" component={Menu}/>
          <Route  path="/contact" component={Contact}/>
          </div>
        </Router>
    );
  }
}

export default App;
