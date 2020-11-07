import ReactDOM, {render} from "react-dom";
import React, {Component} from 'react'

class Navbar extends React.Component {
  render() {
    return (
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

class MainContainer extends React.Component {
  render() {
    return (
      <div className="main-content container">
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

class CardModule extends React.Component {
  render() {
    return (
      <div className="card-module">
        <div className="module-card-left"></div>
        <div className="module-card-right"></div>
        <div className="module-card-left-2"></div>
        <div className="module-card-right-2"></div>
      </div>
    )
  }
}
class ScrollContent extends React.Component {
  render() {
    return (
      <div className="container scroll-content">
        <div className="scroll-text-card">
          <div className="scroll-text">
            <h1 className="scroll-text scroll">Available Plane Modules we<br/>
              <span className="scroll-text-minor scroll">
                can help you with!
              </span>
            </h1>
          
          </div>
        </div>
        <div className="scroll-box">
          <div className="card">
          <CardModule />
  
          </div>
        </div>
      </div>
    )
  }
}




function  MidText(props){
    return(
      <div className="mid-text-section">
          
            <h2 className="main-section-text mid-text">{props.header}<br /></h2>
            <span className="main-quote">{props.mainquote1}</span><br/>
            <span className="main-quote ">{props.mainquote2}</span>
            <br/><span className="blockquote">({props.blockquote})</span>
    
        </div>
    )
}


ReactDOM.render(
  <Navbar/>, document.getElementById('navbar'));
ReactDOM.render(
  <MainContainer/>, document.getElementById('hero-content'));
ReactDOM.render(
  <ScrollContent/>, document.getElementById('scroll-content'));

  ReactDOM.render(
    <MidText 
    header="Start by knowing the structure of an aircraft operates.After all, "
    mainquote1="Learn the rules like a pro,"
    mainquote2="before you fly like an artist"
    blockquote="or something along the same lines!" />, document.getElementById("text-element")
  )