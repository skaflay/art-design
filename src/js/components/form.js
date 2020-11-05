import ReactDOM, { render } from "react-dom";
import React, { Component } from 'react' 


class Navbar extends React.Component{
  render(){
    return(
      <nav id="main-nav" className="navbar">
      <ul id="navbar-list">
      <li>Home</li>
      <li>Plane Models</li>
      <li>Contact Us</li>
      <li>Help</li>
      </ul>
      </nav>
    )
  }
}

class MainContainer extends React.Component{
  render(){
    return(
      <div className="main-content">
        <div className="header-text">
        <h4 className="mid-header">How to Fly</h4>
       <h1 className="main-header">A Plane</h1>
        </div>
    <div className="hero-image">
    <img src="./src/assets/plane.png" className="hero-plane"></img>
    </div>
    </div>
    )
  }
}




class AnimatedPlane extends React.Component{
  render(){
    return (
      <div id="plane-img">
        <img src="./src/assets/plane.png"></img>
      </div>
    )
  }
}


ReactDOM.render(<Navbar />,
  document.getElementById('navbar'));
ReactDOM.render(<MainContainer/>,
  document.getElementById('home-page'));
